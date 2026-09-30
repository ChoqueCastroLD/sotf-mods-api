/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Brand_Legal_TextInputs */

const en_content_brand_legal_text = /** @type {(inputs: Content_Brand_Legal_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The SOTF Mods name and logo identify this community site. You may use them to refer to or link to the site; any other use needs our permission.`)
};

const es_content_brand_legal_text = /** @type {(inputs: Content_Brand_Legal_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El nombre y el logo de SOTF Mods identifican este sitio de la comunidad. Puedes usarlos para mencionar o enlazar el sitio; cualquier otro uso necesita nuestro permiso.`)
};

const de_content_brand_legal_text = /** @type {(inputs: Content_Brand_Legal_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Name und Logo von SOTF Mods kennzeichnen diese Community-Seite. Du darfst sie verwenden, um auf die Seite hinzuweisen oder sie zu verlinken; jede andere Nutzung braucht unsere Erlaubnis.`)
};

const fr_content_brand_legal_text = /** @type {(inputs: Content_Brand_Legal_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le nom et le logo SOTF Mods identifient ce site communautaire. Vous pouvez les utiliser pour mentionner le site ou faire un lien vers lui ; tout autre usage nécessite notre accord.`)
};

const it_content_brand_legal_text = /** @type {(inputs: Content_Brand_Legal_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il nome e il logo di SOTF Mods identificano questo sito della community. Puoi usarli per citare il sito o inserire un link; qualsiasi altro uso richiede il nostro permesso.`)
};

const nl_content_brand_legal_text = /** @type {(inputs: Content_Brand_Legal_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De naam en het logo van SOTF Mods identificeren deze communitysite. Je mag ze gebruiken om naar de site te verwijzen of te linken; voor elk ander gebruik is onze toestemming nodig.`)
};

const pl_content_brand_legal_text = /** @type {(inputs: Content_Brand_Legal_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nazwa i logo SOTF Mods identyfikują ten serwis społeczności. Możesz ich używać, aby wspomnieć o serwisie lub do niego linkować; każde inne użycie wymaga naszej zgody.`)
};

const pt_content_brand_legal_text = /** @type {(inputs: Content_Brand_Legal_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O nome e o logo do SOTF Mods identificam este site da comunidade. Você pode usá-los para mencionar ou linkar o site; qualquer outro uso precisa da nossa permissão.`)
};

const ru_content_brand_legal_text = /** @type {(inputs: Content_Brand_Legal_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Название и логотип SOTF Mods обозначают этот сайт сообщества. Вы можете использовать их, чтобы упомянуть сайт или сослаться на него; для любого другого использования нужно наше разрешение.`)
};

const sv_content_brand_legal_text = /** @type {(inputs: Content_Brand_Legal_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Namnet och logotypen SOTF Mods identifierar den här gemenskapssajten. Du får använda dem för att hänvisa eller länka till sajten; all annan användning kräver vårt tillstånd.`)
};

const tr_content_brand_legal_text = /** @type {(inputs: Content_Brand_Legal_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods adı ve logosu bu topluluk sitesini tanımlar. Siteden söz etmek veya siteye bağlantı vermek için kullanabilirsin; diğer tüm kullanımlar iznimizi gerektirir.`)
};

const zh_content_brand_legal_text = /** @type {(inputs: Content_Brand_Legal_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods 的名称和标志用于标识本社区网站。你可以用它们提及或链接本站；其他任何用途都需要获得我们的许可。`)
};

const ja_content_brand_legal_text = /** @type {(inputs: Content_Brand_Legal_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods の名称とロゴはこのコミュニティサイトを示すものです。サイトへの言及やリンクには使用できますが、それ以外の用途には許可が必要です。`)
};

/**
* | output |
* | --- |
* | "The SOTF Mods name and logo identify this community site. You may use them to refer to or link to the site; any other use needs our permission." |
*
* @param {Content_Brand_Legal_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_brand_legal_text = /** @type {((inputs?: Content_Brand_Legal_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Brand_Legal_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_brand_legal_text(inputs)
	if (locale === "de") return de_content_brand_legal_text(inputs)
	if (locale === "fr") return fr_content_brand_legal_text(inputs)
	if (locale === "it") return it_content_brand_legal_text(inputs)
	if (locale === "nl") return nl_content_brand_legal_text(inputs)
	if (locale === "pl") return pl_content_brand_legal_text(inputs)
	if (locale === "pt") return pt_content_brand_legal_text(inputs)
	if (locale === "ru") return ru_content_brand_legal_text(inputs)
	if (locale === "sv") return sv_content_brand_legal_text(inputs)
	if (locale === "tr") return tr_content_brand_legal_text(inputs)
	if (locale === "zh") return zh_content_brand_legal_text(inputs)
	if (locale === "ja") return ja_content_brand_legal_text(inputs)
	return en_content_brand_legal_text(inputs)
});
