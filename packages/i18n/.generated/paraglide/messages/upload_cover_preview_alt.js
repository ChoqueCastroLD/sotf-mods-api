/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Cover_Preview_AltInputs */

const en_upload_cover_preview_alt = /** @type {(inputs: Upload_Cover_Preview_AltInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cover preview`)
};

const es_upload_cover_preview_alt = /** @type {(inputs: Upload_Cover_Preview_AltInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vista previa de la portada`)
};

const de_upload_cover_preview_alt = /** @type {(inputs: Upload_Cover_Preview_AltInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vorschau des Titelbilds`)
};

const fr_upload_cover_preview_alt = /** @type {(inputs: Upload_Cover_Preview_AltInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aperçu de la couverture`)
};

const it_upload_cover_preview_alt = /** @type {(inputs: Upload_Cover_Preview_AltInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anteprima della copertina`)
};

const nl_upload_cover_preview_alt = /** @type {(inputs: Upload_Cover_Preview_AltInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voorbeeld van de omslag`)
};

const pl_upload_cover_preview_alt = /** @type {(inputs: Upload_Cover_Preview_AltInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Podgląd okładki`)
};

const pt_upload_cover_preview_alt = /** @type {(inputs: Upload_Cover_Preview_AltInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prévia da capa`)
};

const ru_upload_cover_preview_alt = /** @type {(inputs: Upload_Cover_Preview_AltInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Предпросмотр обложки`)
};

const sv_upload_cover_preview_alt = /** @type {(inputs: Upload_Cover_Preview_AltInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Förhandsvisning av omslaget`)
};

const tr_upload_cover_preview_alt = /** @type {(inputs: Upload_Cover_Preview_AltInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kapak önizlemesi`)
};

const zh_upload_cover_preview_alt = /** @type {(inputs: Upload_Cover_Preview_AltInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`封面预览`)
};

const ja_upload_cover_preview_alt = /** @type {(inputs: Upload_Cover_Preview_AltInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`カバーのプレビュー`)
};

/**
* | output |
* | --- |
* | "Cover preview" |
*
* @param {Upload_Cover_Preview_AltInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_cover_preview_alt = /** @type {((inputs?: Upload_Cover_Preview_AltInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Cover_Preview_AltInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_cover_preview_alt(inputs)
	if (locale === "de") return de_upload_cover_preview_alt(inputs)
	if (locale === "fr") return fr_upload_cover_preview_alt(inputs)
	if (locale === "it") return it_upload_cover_preview_alt(inputs)
	if (locale === "nl") return nl_upload_cover_preview_alt(inputs)
	if (locale === "pl") return pl_upload_cover_preview_alt(inputs)
	if (locale === "pt") return pt_upload_cover_preview_alt(inputs)
	if (locale === "ru") return ru_upload_cover_preview_alt(inputs)
	if (locale === "sv") return sv_upload_cover_preview_alt(inputs)
	if (locale === "tr") return tr_upload_cover_preview_alt(inputs)
	if (locale === "zh") return zh_upload_cover_preview_alt(inputs)
	if (locale === "ja") return ja_upload_cover_preview_alt(inputs)
	return en_upload_cover_preview_alt(inputs)
});
