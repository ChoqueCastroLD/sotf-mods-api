/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Preflight_Description_Raw_HtmlInputs */

const en_upload_preflight_description_raw_html = /** @type {(inputs: Upload_Preflight_Description_Raw_HtmlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The description contains HTML: it will show as plain text.`)
};

const es_upload_preflight_description_raw_html = /** @type {(inputs: Upload_Preflight_Description_Raw_HtmlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La descripción contiene HTML: se mostrará como texto.`)
};

const de_upload_preflight_description_raw_html = /** @type {(inputs: Upload_Preflight_Description_Raw_HtmlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Beschreibung enthält HTML: Es wird als Text angezeigt.`)
};

const fr_upload_preflight_description_raw_html = /** @type {(inputs: Upload_Preflight_Description_Raw_HtmlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La description contient du HTML : il s’affichera comme du texte.`)
};

const it_upload_preflight_description_raw_html = /** @type {(inputs: Upload_Preflight_Description_Raw_HtmlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La descrizione contiene HTML: verrà mostrato come testo.`)
};

const nl_upload_preflight_description_raw_html = /** @type {(inputs: Upload_Preflight_Description_Raw_HtmlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De beschrijving bevat HTML: het wordt als tekst getoond.`)
};

const pl_upload_preflight_description_raw_html = /** @type {(inputs: Upload_Preflight_Description_Raw_HtmlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opis zawiera HTML: zostanie pokazany jako tekst.`)
};

const pt_upload_preflight_description_raw_html = /** @type {(inputs: Upload_Preflight_Description_Raw_HtmlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A descrição contém HTML: ele aparecerá como texto.`)
};

const ru_upload_preflight_description_raw_html = /** @type {(inputs: Upload_Preflight_Description_Raw_HtmlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`В описании есть HTML: он будет показан как текст.`)
};

const sv_upload_preflight_description_raw_html = /** @type {(inputs: Upload_Preflight_Description_Raw_HtmlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beskrivningen innehåller HTML: den visas som text.`)
};

const tr_upload_preflight_description_raw_html = /** @type {(inputs: Upload_Preflight_Description_Raw_HtmlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Açıklama HTML içeriyor: metin olarak gösterilecek.`)
};

const zh_upload_preflight_description_raw_html = /** @type {(inputs: Upload_Preflight_Description_Raw_HtmlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`描述中含有 HTML：将以文本形式显示。`)
};

const ja_upload_preflight_description_raw_html = /** @type {(inputs: Upload_Preflight_Description_Raw_HtmlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`説明にHTMLが含まれています。テキストとして表示されます。`)
};

/**
* | output |
* | --- |
* | "The description contains HTML: it will show as plain text." |
*
* @param {Upload_Preflight_Description_Raw_HtmlInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_preflight_description_raw_html = /** @type {((inputs?: Upload_Preflight_Description_Raw_HtmlInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Preflight_Description_Raw_HtmlInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_preflight_description_raw_html(inputs)
	if (locale === "de") return de_upload_preflight_description_raw_html(inputs)
	if (locale === "fr") return fr_upload_preflight_description_raw_html(inputs)
	if (locale === "it") return it_upload_preflight_description_raw_html(inputs)
	if (locale === "nl") return nl_upload_preflight_description_raw_html(inputs)
	if (locale === "pl") return pl_upload_preflight_description_raw_html(inputs)
	if (locale === "pt") return pt_upload_preflight_description_raw_html(inputs)
	if (locale === "ru") return ru_upload_preflight_description_raw_html(inputs)
	if (locale === "sv") return sv_upload_preflight_description_raw_html(inputs)
	if (locale === "tr") return tr_upload_preflight_description_raw_html(inputs)
	if (locale === "zh") return zh_upload_preflight_description_raw_html(inputs)
	if (locale === "ja") return ja_upload_preflight_description_raw_html(inputs)
	return en_upload_preflight_description_raw_html(inputs)
});
