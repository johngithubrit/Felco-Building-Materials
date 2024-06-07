const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const fs = require("fs");
var PORT = 3000;
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(express.static("public"));
app.use(bodyParser.text());
const descofpro = '[{"descrip": "High quality, emulsion for walls and ceilings suitable for most rooms of the house. Matt Emulsion is perfect for disguising uneven surfaces and gives great coverage!"},{"descrip": "High gloss enamel Berger is a durable and high-shine paint that provides a smooth, glossy finish to surfaces. It is easy to clean and resistant to stains, making it ideal for high-traffic areas like kitchens and bathrooms."},{"descrip": "Used to create a base for the paint, improve adhesion, and prevent stains and bleeding. Sealer, on the other hand, is used to seal the surface and prevent the topcoat from being absorbed or bleeding through."},{"descrip": "A type of paint that has a very flat, matte finish with minimal sheen or gloss. It is often used in automotive painting, particularly in custom cars and motorcycles, as well as in interior and exterior house painting."},{"descrip": "Home decor and fashion items such as curtains, upholstery, bedding, and clothing. It is known for its luxurious feel, soft texture, and smooth sheen, making it a popular choice for adding a touch of elegance to any space."},{"descrip": "Acrylic matte paint is suitable for use on a variety of surfaces, including walls, furniture, canvases, and crafts. It offers good coverage, color retention, and resistance to fading, making it ideal for both indoor and outdoor applications"},{"descrip": "It is a versatile and commonly used primer that can be applied to a variety of surfaces, including wood, metal, plastic, and drywall. Acrylic primer helps to create a smooth and even surface for paint to adhere to, improving adhesion and durability."},{"descrip": "A separate layer, formulated to provide the best surface for the desired topcoat promoting good adhesion, depth of colour, flatness and longevity."},{"descrip": "Decorative paint that adds depth and dimension to walls. It comes in a variety of textures, including smooth, sandy, gritty, and more. This type of paint can be used to create visual interest and unique effects on walls, giving them a tactile and visually appealing finish."},{"descrip":"High quality, emulsion for walls and ceilings suitable for most rooms of the house. Matt Emulsion is perfect for disguising uneven surfaces and gives great coverage!"},{"descrip": "High gloss enamel Berger is a durable and high-shine paint that provides a smooth, glossy finish to surfaces. It is easy to clean and resistant to stains, making it ideal for high-traffic areas like kitchens and bathrooms."},{"descrip": "Used to create a base for the paint, improve adhesion, and prevent stains and bleeding. Sealer, on the other hand, is used to seal the surface and prevent the topcoat from being absorbed or bleeding through."},{"descrip": "A separate layer, formulated to provide the best surface for the desired topcoat; promoting good adhesion, depth of colour, flatness and longevity."},{"descrip": "Used by artists, both professionals and hobbyists, for creating traditional oil painting effects without the drawbacks of long drying times and strong odors. It can be used on various surfaces, including canvas, wood, and paper, and is compatible with other painting mediums."},{"descrip": "A versatile and durable water-based paint that contains plastic resin binders, pigments, and additives. It is commonly used for painting interior and exterior walls of buildings, furniture, metal surfaces, and for various decorative projects."},{"descrip": "PVA primer is commonly used on drywall, plaster, wood, and other porous surfaces to seal and prepare them for painting.  It is a water-based primer that helps improve adhesion and longevity of paint on various surfaces."},{"descrip": "Acrylic matte paint is suitable for use on a variety of surfaces, including walls, furniture, canvases, and crafts. It offers good coverage, color retention, and resistance to fading, making it ideal for both indoor and outdoor applications"},{"descrip": "It is a versatile and commonly used primer that can be applied to a variety of surfaces, including wood, metal, plastic, and drywall. Acrylic primer helps to create a smooth and even surface for paint to adhere to, improving adhesion and durability."},{"descrip": "A high-quality paint that offers a smooth and silky finish to surfaces, giving them a luxurious and elegant look. This paint is perfect for interior walls and ceilings, providing excellent durability, washability, and resistance to stains."},{"descrip": "A separate layer, formulated to provide the best surface for the desired topcoat; promoting good adhesion, depth of colour, flatness and longevity."},{"descrip": "A premium quality interior paint that offers a smooth and elegant matte finish. It is ideal for use on walls and ceilings, providing excellent coverage and durability. This paint is washable and resistant to stains, making it a practical choice for high-traffic areas in homes or commercial spaces."},{"descrip": "Luxurious interior paint that offers a silky smooth finish, perfect for adding a touch of elegance to any room. This high-quality paint is ideal for use on walls and ceilings, providing a subtle sheen that enhances the look of any space."},{"descrip": "A premium quality, low-sheen paint that provides a smooth and elegant finish to interior walls and ceilings. This paint offers excellent coverage, durability, and washability, making it a practical choice for high-traffic areas in your home."},{"descrip": "A high-quality, premium silk finish paint that adds a touch of luxury to interior surfaces. This paint provides a smooth and silky finish that gives a sophisticated and elegant look to walls and ceilings."},{"descrip": "It is a versatile and commonly used primer that can be applied to a variety of surfaces, including wood, metal, plastic, and drywall. Acrylic primer helps to create a smooth and even surface for paint to adhere to, improving adhesion and durability."},{"descrip": "A versatile and durable material used for waterproofing various surfaces such as roofs, foundations, and basements. It is made of a mixture of bitumen, which is a sticky, black, and highly viscous liquid or semi-solid form of petroleum."},{"descrip": "Bitumen Sb offers improved flexibility, durability, and adhesive characteristics compared to regular bitumen. It is often used in the production of waterproofing membranes, roofing materials, and asphalt mixes for road construction."},{"descrip": "Thin liquid substance that is applied to surfaces to improve adhesion before the installation of bitumen membranes or coatings. It is made of bitumen, solvents, and additives that help promote better bonding between the substrate and the waterproofing material."},{"descrip": "Roof cement GMC is typically used to repair cracks, holes, and leaks in various roofing materials such as shingles, metal, and built-up roofing systems. It is specifically formulated to adhere well to different roofing substrates and provide a water-tight seal to prevent water infiltration."},{"descrip": "These sheets are commonly used in construction, landscaping, and various other applications to provide a protective barrier against water penetration."},{"descrip": "Small gypsum boards are lightweight, prefabricated panels made from a core of gypsum plaster sandwiched between layers of paper. These boards are commonly used in interior construction for wall and ceiling applications. "},{"descrip": "Is a long metal or steel component that runs perpendicular to the joists or trusses in the ceiling. It serves as the main support structure for the suspended ceiling system, providing a base for attaching the cross tees and gypsum boards."},{"descrip": "A vertical component that is attached to the wall to support the vertical edges of the gypsum board. Wall channels are used to create a framework for the installation of drywall on walls, providing a secure base for the boards to be screwed or nailed into place."},{"descrip": "Furring channels are used to create a level surface for attaching the gypsum boards or provide additional support for the ceiling or wall when the existing structure is not suitable for direct installation."},{"descrip": "It is lightweight, easy to work with, and has a pale color that lends itself well to painting and staining. White wood is often used for framing, trim, furniture, and decorative applications."},{"descrip": "Dense, smooth, and consistent in thickness, making it an excellent choice for furniture, cabinetry, shelving, and decorative paneling. It is easy to paint, cut, and shape, making it a popular material for a wide range of interior projects."},{"descrip": "A high-quality plywood specifically designed for use in wet or humid environments, such as boat building, docks, and outdoor construction."},{"descrip": "It is suitable for a wide range of interior and exterior applications, including furniture, flooring, cabinetry, and paneling. Normal plywood is available in different grades and thicknesses, offering varying levels of durability and performance."},{"descrip": "Decor plywood may be used for interior design projects, furniture making, wall paneling, and architectural elements. It provides a stylish and attractive alternative to traditional plywood for aesthetic purposes."},{"descrip": "PVC pipes are lightweight, easy to install, and resistant to corrosion, chemicals, and abrasion. They are available in various sizes and thicknesses for different applications, such as water supply, sewer lines, and conduit piping."},{"descrip": "PVC fittings are designed to create watertight seals and ensure proper flow within the piping system."},{"descrip": "HP pipes are commonly used in applications such as industrial processes, oil and gas pipelines, and hydraulic systems. "},{"descrip": "These fittings are made from high-quality materials, such as stainless steel or brass, to ensure strength and durability under extreme conditions. "},{"descrip": "PPR pipes are lightweight, corrosion-resistant, and have a smooth inner surface that prevents scaling and improves flow efficiency. These pipes are easy to install, maintain, and provide long-lasting performance."},{"descrip": "These fittings are designed to provide leak-proof connections, flexibility, and resistance to high temperatures and pressure. PPR fittings come in various shapes and sizes to accommodate different piping configurations and applications."},{"descrip": "WCs come in various styles, such as one-piece or two-piece, and can be installed as floor-mounted or wall-mounted units. They typically include a bowl, a seat, and a flushing mechanism."},{"descrip": "Seat covers are available in different materials, such as plastic or wood, and can be easily removed for cleaning and maintenance."},{"descrip": "The tank holds water that is used for flushing waste down the drainage system when the toilet is flushed. Flush tank WCs are commonly used in residential and commercial buildings."},{"descrip": "It is designed for users to squat over the toilet hole for waste disposal. Saiffon WCs are known for their simple and cost-effective design."},{"descrip": "Small accessories or parts used to attach and secure toilet seat covers to the toilet seat. These fittings typically include clips, adhesive pads, hooks, and elastic straps that help hold the seat cover in place and prevent it from moving or slipping."},{"descrip": "These bolts are typically made of durable materials like stainless steel and are designed to provide stability and support for the washbasin."},{"descrip": "These bolts are essential for ensuring the stability of the flush tank and preventing leaks or damage."},{"descrip": "It is typically installed below a sink or washbasin and traps water to create a seal that prevents odors from coming back up the drain."},{"descrip": "It is designed to prevent sewer gases from entering the building while allowing wastewater to flow down the drain."},{"descrip": "Used in plumbing systems where the drainage pipe exits through the floor rather than the wall. It performs a similar function to a P trap by preventing sewer gases from entering the building."},{"descrip": "It is designed to collect waste water and prevent debris from entering the sewer line, helping to prevent blockages and maintain proper drainage."},{"descrip": "Tubelights are commonly used for general lighting in homes, offices, and commercial spaces due to their energy efficiency and brightness."},{"descrip": "A tubelight set typically includes the tubelight fixture, the tube-shaped bulb, and any necessary mounting hardware for installation. "},{"descrip": "Frames can be made of materials like metal, plastic, or wood and are designed to provide stability and aesthetic appeal to the light fixture."},{"descrip": "LED panels are known for their energy efficiency, long lifespan, and even light distribution, making them ideal for general illumination in homes, offices, and other indoor spaces."},{"descrip": "COB lights produce bright, focused light and are commonly used in spotlights, downlights, and track lighting fixtures."},{"descrip": "Switches are commonly used to turn lights on or off and adjust the brightness of lighting fixtures. "},{"descrip": "Sockets are commonly used to power lighting fixtures, appliances, and electronic devices in homes and buildings."},{"descrip": "A flush box is a mounting box that is installed in the wall or ceiling to provide a recessed cavity for mounting electrical switches, sockets, or other electrical components."},{"descrip": "A surface box is a mounting box that is installed on the surface of a wall or ceiling to provide a housing for electrical switches, sockets, or other electrical components."},{"descrip": "A plug is an electrical device consisting of a pronged casing that is inserted into an electrical outlet to connect an electrical appliance or device to a power source."},{"descrip": "Wire connector is a device used to join two or more electrical wires together for the purpose of creating a secure and reliable electrical connection."},{"descrip": "An electric pipe, also known as a conduit, is a tube or channel used to protect and route electrical wiring in buildings or structures."},{"descrip": "These fittings ensure proper electrical connections, support wiring systems, and maintain safety standards in electrical installations."},{"descrip": "devices, components, or accessories used to connect, protect, control, and manage electrical energy in various applications. They are designed to ensure safe and efficient operation of electrical systems, from residential to commercial and industrial settings."},{"descrip": "Wires come in various sizes, materials, and configurations to accommodate different electrical needs and applications."},{"descrip": "Wires come in various sizes, materials, and configurations to accommodate different electrical needs and applications."},{"descrip": "Wires come in various sizes, materials, and configurations to accommodate different electrical needs and applications."},{"descrip": " Type of electrical wire designed to transmit audio signals between devices, such as speakers, amplifiers, and receivers. Speaker wire is typically made of copper or aluminum and is insulated with a plastic or rubber coating to prevent corrosion and electrical noise."},{"descrip": "OPC cement is known for its strength, durability, and versatility in building projects. It is used to bond building materials, form structural elements, and create solid and durable construction finishes."},{"descrip": "It is essential for ensuring proper tile installation, preventing tile slippage, and maintaining a durable and long-lasting tiled surface."},{"descrip": "Fillers come in paste or powder form and are applied to repair and smooth out surface irregularities, creating a seamless and uniform finish. Fillers can be used in various building and renovation projects to achieve a polished and professional look."}]';

const prdlist = '[{"img" : "","title" : "Value Matt Emulsion"},{ "img" : "","title" : "High Gloss Enamel"},{ "img" : "","title" : "Primer Sealer"},{ "img" : "","title" : "SuperFlat"},{ "img" : "","title" : "Silk"},{"img" : "","title" : "Acrylic Emulsion"},{"img" : "","title" : "AR Primer"},{ "img" : "","title" : "Berger Undercoat"},{"img" : "","title" : "Texture Paint"},{"img" : "","title" : "Interior Emulsion"},{ "img" : "","title" : "Gloss Enamel"},{ "img" : "","title" : "Optima Primer Sealer"},{ "img" : "","title" : "Prisma Undercoat"},{"img" : "","title" : "Synthetic enamel"},{"img" : "","title" : "Plastic Emulsion"},{"img" : "","title" : "PVA Primer"},{"img" : "","title" : "AR Emulsion"},{"img" : "","title" : "Acrylic Primer"},{"img" : "","title" : "Silk Mastic"},{"img" : "","title" : "Brighto Undercoat"},{"img" : "","title" : "Fenumastic Matt"},{"img" : "","title" : "Fenumastic Silk"},{"img" : "","title" : "Durason Matt"},{"img" : "","title" : "Durason Silk"},{"img" : "","title" : "Ar Primer"},{"img" : "","title" : "Tarpal"},{"img" : "","title" : "Bitumen SB"},{"img" : "","title" : "Bitumen Primer"},{"img" : "","title" : "Gar"},{"img" : "","title" : "Waterproof Sheet"},{"img" : "","title" : "Gypsum Board"},{"img" : "","title" : "Main Channel"},{"img" : "","title" : "Wall Channel"},{"img" : "","title" : "Furinge Channel"},{"img" : "","title" : "White Wood"},{"img" : "","title" : "MDF Wood"},{"img" : "","title" : "Marine Plywood"},{"img" : "","title" : "Normal Plywood"},{"img" : "","title" : "Decor Plywood"},{"img" : "","title" : "PVC Pipe"},{"img" : "","title" : "PVC Fittings"},{"img" : "","title" : "HP Pipe"},{"img" : "","title" : "HP Fittings"},{"img" : "","title" : "PPR Pipe"},{"img" : "","title" : "PPR Fittings"},{"img" : "","title" : "WC"},{"img" : "","title" : "Seat Cover"},{"img" : "","title" : "Flush Tank"},{"img" : "","title" : "Saiffon"},{"img" : "","title" : "Seatcover Fitting"},{"img" : "","title" : "Wash Basin Nut"},{"img" : "","title" : "Flush Tank Bolt"},{"img" : "","title" : "Bottle Trap"},{"img" : "","title" : "P Trap"},{"img" : "","title" : "S Trap"},{"img" : "","title" : "Gully Trap"},{"img" : "","title" : "Tubelight"},{"img" : "","title" : "Tubelight Set"},{"img" : "","title" : "Frame"},{"img" : "","title" : "LED Panel Light"},{"img" : "","title" : "LED Cob Light"},{"img" : "","title" : "Switch"},{"img" : "","title" : "Sockets"},{"img" : "","title" : "Flush Box"},{"img" : "","title" : "Surface Box"},{"img" : "","title" : "Plug"},{"img" : "","title" : "Wire Connector"},{"img" : "","title" : "Electric Pipe"},{"img" : "","title" : "Electric Fittings"},{"img" : "","title" : "Trunking"},{"img" : "","title" : "Single Core Wire"},{"img" : "","title" : "2 Core Wire"},{"img" : "","title" : "3 Core Wire"},{"img" : "","title" : "Speaker Core Wire"},{"img" : "","title" : "OPC Cement"},{"img" : "","title" : "Tiles Glue"},{"img" : "","title" : "Filler"}]';

const prdoptions = '[{"opt" : "Gallon" },{"opt" : "Litre"},{"opt" : "Drum"} ,{"opt" : "Green"} ,{"opt" : "Bathroom"} , {"opt" : "Grey"} , {"opt" : "100 mtr"} , {"opt" : "300 mtr"} , {"opt" : "Normal"} , {"opt" : "Waterproof"} , {"opt" : "Fireproof"} , {"opt" : "1x2"} , {"opt" : "2x2"} , {"opt" : "3x2"} , {"opt" : "12mm"} , {"opt" : "18mm"} , {"opt" : "4mm"} , {"opt" : "6mm"} , {"opt" : "9mm"} , {"opt" : "12mm"} , {"opt" : "18mm"} , {"opt" : "1 1/4 inch"} , {"opt" : "1 1/2 inch"}  , {"opt" : "2 inch"} , {"opt" : "3 inch"} , {"opt" : "4 inch"} , {"opt" : "1/2 inch"} , {"opt" : "3/4 inch"} , {"opt" : "1 inch"} , {"opt" : "1 1/4 inch"} , {"opt" : "1 1/2 inch"} , {"opt" : "2 inch"} , {"opt" : "20mm"} , {"opt" : "25mm"} , {"opt" : "32mm"} , {"opt" : "40mm"} , {"opt" : "50mm"} , {"opt" : "63mm"} , {"opt" : "Short"} , {"opt" : "Long"} , {"opt" : "Uk"} , {"opt" : "2 feet"} , {"opt" : "4 feet"} , {"opt" : "3 inch"} , {"opt" : "6 inch"} , {"opt" : "8 inch"} , {"opt" : "10 inch"} , {"opt" : "Single"}, {"opt" : "Double"}, {"opt" : "1 Gang"} , {"opt" : "2 Gang"},{"opt" : "3 Gang"},{"opt" : "4 Gang"}, {"opt" : "3 x 3"},  {"opt" : "3 x 6"},  {"opt" : "6 sqm"},  {"opt" : "10 sqm"},  {"opt" : "12 sqm"}, {"opt" : "14 sqm"}, {"opt" : "20mm"},{"opt" : "25mm"},{"opt" : "32mm"},{"opt" : "38mm"},{"opt" : "50mm"}, {"opt" : "16mm x 16mm"}, {"opt" : "25mm x 16mm"}, {"opt" : "50mm x 50mm"}, {"opt" : "75mm x 75mm"}, {"opt" : "110mm x 110mm"}, {"opt" : "1.0mm"}, {"opt" : "1.5mm"}, {"opt" : "2.5mm"}, {"opt" : "4mm"},  {"opt" : "1.5mm"}, {"opt" : "2.5mm"}, {"opt" : "4mm"}, {"opt" : "6mm"},{"opt" : "One Piece"}, {"opt" : "Two Piece"},{"opt" : "Low Level"},{"opt" : "High Level"}]';

const prdhead = '[{"head":"Paint"},{"head":"Berger"},{"head":"Prisma"},{"head":"Brighto"},{"head":"Jotun"},{"head":"Waterproof"},{"head" : "Board & Wood"},{"head":"Plumbing"},{"head":"Sanitary"},{"head":"Sanitary"},{"head":"Electrical"},{"head":"Switches & Sockets"},{"head":"Pipe"},{"head":"Wires"},{"head":"Cement & Glue"}]';

const productimgg = '[{"pict" : "../image/mattemulsion.png"},{"pict" : "../image/highgloss.png"},{"pict" : "../image/mattemulsion.png"},{"pict" : "../image/Superflat.png"},{"pict" : "../image/bergersilk.jpg"},{"pict" : "../image/highgloss.png"},{"pict" : "../image/bitumensb.png"},{"pict" : "../image/highgloss.png"},{"pict" : "../image/mattemulsion.png"},{"pict" : "../image/prismapaint.png"},{"pict" : "../image/bitumensb.png"},{"pict" : "../image/prismapaint.png"},{"pict" : "../image/bitumensb.png"},{"pict" : "../image/synthetic.png"},{"pict" : "../image/pva.png"},{"pict" : "../image/pva.png"},{"pict" : "../image/acrylicemulsion.png"},{"pict" : "../image/acrylicprimer.png"},{"pict" : "../image/supermastic.png"},{"pict" : "../image/brightoundercoat.png"},{"pict" : "../image/jotunfenumasticmatt.png"},{"pict" : "../image/fenumasticsilk.png"},{"pict" : "../image/durasonmatt.png"},{"pict" : "../image/jotunacrylicprimer.png"},{"pict" : "../image/jotunacrylicprimer.png"},{"pict" : "../image/waterprooftarpal.png"},{"pict" : "../image/bitumensb.png"},{"pict" : "../image/bitumenprimer.png"},{"pict" : "../image/bitumensb.png"},{"pict" : "../image/waterproofsheet.png"},{"pict" : "../image/gypsumboard.png"},{"pict" : "../image/mainchannel.png"},{"pict" : "../image/wallchannel.png"},{"pict" : "../image/furingechannel.png"},{"pict" : "../image/whitewood.png"},{"pict" : "../image/mdf.png"},{"pict" : "../image/marineplywood.png"},{"pict" : "../image/normalplywood.png"},{"pict" : "../image/decorplywood.png"},{"pict" : "../image/pvcpipe.jpg"},{"pict" : "../image/pvcfittings.png"},{"pict" : "../image/hppipe.png"},{"pict" : "../image/hp fittings.png"},{"pict" : "../image/pprpipe.png"},{"pict" : "../image/pprfittings.png"},{"pict" : "../image/2 piece.png"},{"pict" : "../image/seatcover.png"},{"pict" : "../image/flushtank.png"},{"pict" : "../image/saiffon.png"},{"pict" : "../image/seatcoverfittings.png"},{"pict" : "../image/washbasinbolt.png"},{"pict" : "../image/flushtankbolt.png"},{"pict" : "../image/bottletrap.png"},{"pict" : "../image/ptrap.png"},{"pict" : "../image/strap.png"},{"pict" : "../image/gullytrap.png"},{"pict" : "../image/ledtube.png"},{"pict" : "../image/tuberectangle.png"},{"pict" : "../image/tubeframe.png"},{"pict" : "../image/flatlight.png"},{"pict" : "../image/coblight.png"},{"pict" : "../image/switch.png"},{"pict" : "../image/socket.png"},{"pict" : "../image/flushbox.png"},{"pict" : "../image/surfacebox.png"},{"pict" : "../image/Plug.png"},{"pict" : "../image/Wireconnector.png"},{"pict" : "../image/electpipe.png"},{"pict" : "../image/electfittings.png"},{"pict" : "../image/trunking.png"},{"pict" : "../image/singlecorewire.png"},{"pict" : "../image/3corewire.png"},{"pict" : "../image/3corewire.png"},{"pict" : "../image/speakerwire.png"},{"pict" : "../image/opccement.png"},{"pict" : "../image/isolith100.png"},{"pict" : "../image/filler.png"}]'

const paintcolor = '[{"namepaint" : "White","paints" : "#ffffff"},{"namepaint" : "OffWhite","paints" : "#F8F0E3"},{"namepaint" : "ivory","paints" : "#fffff0"},{"namepaint" : "Magnolia","paints" : "#f8f4ff"},{"namepaint" : "White","paints" : "#ffffff"},{"namepaint" : "Black","paints" : "#000000"},{"namepaint" : "Golden Brown","paints" : "#996515"},{"namepaint" : "Dove Grey","paints" : "#5D5B53"},{"namepaint" : "White","paints" : "#ffffff"},{"namepaint" : "Cream","paints" : "#fffdd0"},{"namepaint" : "White","paints" : "#ffffff"},{"namepaint" : "Black","paints" : "#000000"},{"namepaint" : "White","paints" : "#ffffff"},{"namepaint" : "Black","paints" : "#000000"},{"namepaint" : "OffWhite","paints" : "#F8F0E3"},{"namepaint" : "Spring Green","paints" : "#00ff7f"},{"namepaint" : "Lemon","paints" : "#fff700"},{"namepaint" : "Chocolate","paints" : "#d2691e"},{"namepaint" : "Cream","paints" : "#fffdd0"},{"namepaint" : "Silver Grey","paints" : "#c0c0c0"},{"namepaint" : "Golden Brown","paints" : "#996515"},{"namepaint" : "Orange","paints" : "#fec169"}]';

const linktitle = '[{"ctitl" : "Paint"},{"ctitl" : "Paint"},{"ctitl" : "Paint"},{"ctitl" : "Paint"},{"ctitl" : "Waterproof"},{"ctitl" : "Board & Wood"},{"ctitl" : "Plumbing"},{"ctitl" : "Sanitary"},{"ctitl" : "Sanitary"},{"ctitl" : "Electrical"},{"ctitl" : "Switches and Sockets"},{"ctitl" : "Pipe"},{"ctitl" : "Wires"}]';

const products = JSON.parse(prdlist);
const heads = JSON.parse(prdhead);
const options = JSON.parse(prdoptions);
const pictt = JSON.parse(productimgg);
const paintclr = JSON.parse(paintcolor);
const paintclrname = JSON.parse(paintcolor);
const paintclrtitle = JSON.parse(linktitle);
const prosedesc = JSON.parse(descofpro);
let i;
let h;
let l;
let d;
var check = true;
var cross = true;
var cartcheck = "";
var goos = "";
var visi = "";
var ittems = "";
var qtty = "";
var clrtrigger = true;
var basub = "";
var mainname = "";
var listingclr = "";
let selectedText = "";
var optt = "";
let delehead;
var colorcheck = "";
let specicode = 1;
var skit = "";
var flipdesk = "";
var ittemcatt = "";
var ittemimg = "";
var ittemimgdis = "";
var ittemimgdesc = "";
var innerSearch = "";
var editchange = "";
let btnclick = false;
var mapsearch = [];
var itemflip = [];
var itemcount = [];

app.get("/",function(req,res){
  res.render("felco.ejs");
});

app.get("/productsection", function(req, res){
  const itemdetails = [];
  const itemcate = [];
  const itemimg = [];
    const itemtitlcheck = [];
  const itemdesc = [];
  const itemdetailshead = [];
  const itemeditchange = [];
  for (i = 0; i < products.length; i++) {
    itemdetails.push(products[i].title);
    itemdetailshead.push(products[i].heading);
}
for (var k = 0; k < paintclrtitle.length; k++) {
  itemtitlcheck.push(paintclrtitle[k].ctitl);
}

for (h = 0; h < heads.length; h++) {
  itemcate.push(heads[h].head.toUpperCase());
}
for (l = 0; l < pictt.length; l++) {
  itemimg.push(pictt[l].pict);
}
for(i=0;i<prosedesc.length;i++){
itemdesc.push(prosedesc[i].descrip);
}

  res.render("product.ejs", { itemtext: itemdetails,putname: itemtitlcheck,itemtexthead: itemdetailshead, itemhead: itemcate, itempict: itemimg, itemofdesc: itemdesc,itemsearch : innerSearch,itemmap : mapsearch, itemadd : itemcount});
});

app.get("/prodesc",function(req,res){
  const itempaintclr = [];
  const itempaintname = [];
  const itemopts = [];
  for (i = 0; i < options.length; i++) {
    itemopts.push(options[i].opt);
}
for (d = 0; d < paintclr.length; d++) {
  itempaintclr.push(paintclr[d].paints);
  itempaintname.push(paintclrname[d].namepaint);
  console.log(paintclr[d].paints);
}

  res.render("productdesc.ejs", {clrcheck : colorcheck, skitchoose :  skit, iiteem: ittems, iiteemcate: ittemcatt, itemdde : itemopts, itempai : itempaintclr, itemddessc : itemdesc,itempainame : itempaintname, itemimage : ittemimg});
});
app.post("/prodesc",function(req,res){
  const innerHtml = req.body.innerHtml;
  const innerHtmlcat = req.body.innercatHtml;
  const innerHtmldesc = req.body.innerdescpros;
  const innerHtmlimage = req.body.innerimagepros;
  clrtrigger = false;
      if (innerHtml) {
          ittems = innerHtml;
            ittemcatt = innerHtmlcat;
            itemdesc = innerHtmldesc;
            ittemimg = innerHtmlimage;
      }
  res.redirect("/prodesc");
  });
app.post("/", function(req, res){
  innerSearch = req.body.textwritten;
  for (let i = 0; i < prdlist.length; i++) {
      if (products[i] && products[i].title) {
        const ltt = products[i].title;
        if(innerSearch === ltt.substring(0,innerSearch.length)){
        mapsearch.push(products[i].title);
        console.log(mapsearch);
      } else if(innerSearch!= mapsearch[i]){
        mapsearch.splice(i,1);
        console.log(mapsearch);
      }
      }
    }
  res.redirect("/productsection");
});

app.post("/colorselect", function(req, res) {
  colorcheck = req.body.codebtn;
  res.redirect("/prodesc");
});

app.post("/adit",function(req,res){
  res.redirect("/cartpage");
});
app.post("/proddescback",function(req,res){
  qtty = req.body.qtyGet;
  optt = req.body.optiget;
  basub = req.body.subcheck;
  mainname = req.body.heeadname;
  editchange = req.body.fixededit;
  if(optt == undefined && editchange == undefined && basub != "BERGER" && basub != "PRISMA" && basub != "JOTUN" && basub != "BRIGHTO"){
      itemcount.push("\n" + qtty + " " + "nos" + ":" + " " + mainname + "\n");
}else if(optt != "" && editchange == undefined && basub != "BERGER" && basub != "PRISMA" && basub != "JOTUN" && basub != "BRIGHTO"){
  itemcount.push("\n" + qtty + " "  + "nos" + ":" + " " + optt + " " + mainname + "\n");
}else if(editchange != "" && optt == undefined && basub != "BERGER" && basub != "PRISMA" && basub != "JOTUN" && basub != "BRIGHTO"){
  itemcount.push("\n" + qtty + " "  + "nos" + ":" + " " + editchange + " " + mainname + "\n");
}else if(colorcheck != "" && basub === "BERGER" || basub === "PRISMA" || basub === "JOTUN" || basub === "BRIGHTO"){
  itemcount.push("\n" + qtty + " " + optt + ":"  + " " + basub[0].toUpperCase() + basub.substring(1,basub.length).toLowerCase() + " " + mainname + " " +  colorcheck + "\n");
}

if(clrtrigger === false){
  colorcheck = "White";
}

clrtrigger = true;

if(qtty != ""){
  if(colorcheck != ""){
    res.redirect("/productsection");
  }else{
  }
}else if(basub === "" && qtty === undefined){
console.log("none");
}
});
app.post("/prodredirect",function(req,res){
  res.redirect("/");
});

app.post("/closit",function(req,res){

  res.redirect("/productsection");
});

app.get("/cartpage",function(req,res){
  res.render("addcart.ejs",{ itemspecicode : specicode,itemdelehead : delehead,itembtnclick : btnclick,checkcam : check,crosscam : cross, visicam : visi, flipped : itemflip, itemadd : itemcount,  cartcamm : cartcheck,itemsearch : innerSearch});
});

app.post("/initialpage",function(req,res){
  res.redirect("/productsection");
});

app.post("/backform",function(req,res){
  res.redirect("/productsection");
});

app.post("/delete",function(req,res){
 var delehead = parseInt(req.body.delecode);
  itemcount.splice(delehead, 1);
  res.redirect("/cartpage");
});

app.listen(PORT, function(){
  console.log("success");
});
