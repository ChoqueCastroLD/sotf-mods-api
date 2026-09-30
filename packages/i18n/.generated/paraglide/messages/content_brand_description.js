/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Brand_DescriptionInputs */

const en_content_brand_description = /** @type {(inputs: Content_Brand_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download the SOTF Mods logo, isotype and colours, and see how to link to the site from your mod, video or server.`)
};

const es_content_brand_description = /** @type {(inputs: Content_Brand_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descarga el logo, el isotipo y los colores de SOTF Mods, y mira cómo enlazar el sitio desde tu mod, vídeo o servidor.`)
};

const de_content_brand_description = /** @type {(inputs: Content_Brand_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lade Logo, Bildmarke und Farben von SOTF Mods herunter und sieh, wie du die Seite aus deinem Mod, Video oder Server verlinkst.`)
};

const fr_content_brand_description = /** @type {(inputs: Content_Brand_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Téléchargez le logo, le symbole et les couleurs de SOTF Mods, et voyez comment faire un lien vers le site depuis votre mod, vidéo ou serveur.`)
};

const it_content_brand_description = /** @type {(inputs: Content_Brand_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scarica logo, simbolo e colori di SOTF Mods e scopri come inserire un link al sito dalla tua mod, dal tuo video o dal tuo server.`)
};

const nl_content_brand_description = /** @type {(inputs: Content_Brand_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download het logo, beeldmerk en de kleuren van SOTF Mods en zie hoe je vanuit je mod, video of server naar de site linkt.`)
};

const pl_content_brand_description = /** @type {(inputs: Content_Brand_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobierz logo, sygnet i kolory SOTF Mods i zobacz, jak linkować do serwisu ze swojego moda, filmu lub serwera.`)
};

const pt_content_brand_description = /** @type {(inputs: Content_Brand_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Baixe o logo, o símbolo e as cores do SOTF Mods e veja como colocar um link para o site no seu mod, vídeo ou servidor.`)
};

const ru_content_brand_description = /** @type {(inputs: Content_Brand_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скачайте логотип, знак и цвета SOTF Mods и узнайте, как ставить ссылку на сайт из своего мода, видео или сервера.`)
};

const sv_content_brand_description = /** @type {(inputs: Content_Brand_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ladda ner logotyp, symbol och färger för SOTF Mods och se hur du länkar till webbplatsen från din modd, video eller server.`)
};

const tr_content_brand_description = /** @type {(inputs: Content_Brand_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods logosunu, simgesini ve renklerini indir; modundan, videondan veya sunucundan siteye nasıl bağlantı vereceğini gör.`)
};

const zh_content_brand_description = /** @type {(inputs: Content_Brand_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下载 SOTF Mods 的标志、图形标和配色，并了解如何在你的模组、视频或服务器中链接到本站。`)
};

const ja_content_brand_description = /** @type {(inputs: Content_Brand_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods のロゴ、シンボル、カラーをダウンロードし、Mod や動画、サーバーからサイトへリンクする方法を確認できます。`)
};

/**
* | output |
* | --- |
* | "Download the SOTF Mods logo, isotype and colours, and see how to link to the site from your mod, video or server." |
*
* @param {Content_Brand_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_brand_description = /** @type {((inputs?: Content_Brand_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Brand_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_brand_description(inputs)
	if (locale === "de") return de_content_brand_description(inputs)
	if (locale === "fr") return fr_content_brand_description(inputs)
	if (locale === "it") return it_content_brand_description(inputs)
	if (locale === "nl") return nl_content_brand_description(inputs)
	if (locale === "pl") return pl_content_brand_description(inputs)
	if (locale === "pt") return pt_content_brand_description(inputs)
	if (locale === "ru") return ru_content_brand_description(inputs)
	if (locale === "sv") return sv_content_brand_description(inputs)
	if (locale === "tr") return tr_content_brand_description(inputs)
	if (locale === "zh") return zh_content_brand_description(inputs)
	if (locale === "ja") return ja_content_brand_description(inputs)
	return en_content_brand_description(inputs)
});
