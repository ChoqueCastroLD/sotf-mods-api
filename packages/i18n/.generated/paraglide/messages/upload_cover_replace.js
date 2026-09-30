/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Cover_ReplaceInputs */

const en_upload_cover_replace = /** @type {(inputs: Upload_Cover_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Replace the cover`)
};

const es_upload_cover_replace = /** @type {(inputs: Upload_Cover_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reemplazar la portada`)
};

const de_upload_cover_replace = /** @type {(inputs: Upload_Cover_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Titelbild ersetzen`)
};

const fr_upload_cover_replace = /** @type {(inputs: Upload_Cover_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remplacer la couverture`)
};

const it_upload_cover_replace = /** @type {(inputs: Upload_Cover_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sostituisci la copertina`)
};

const nl_upload_cover_replace = /** @type {(inputs: Upload_Cover_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Omslag vervangen`)
};

const pl_upload_cover_replace = /** @type {(inputs: Upload_Cover_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zmień okładkę`)
};

const pt_upload_cover_replace = /** @type {(inputs: Upload_Cover_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Substituir a capa`)
};

const ru_upload_cover_replace = /** @type {(inputs: Upload_Cover_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Заменить обложку`)
};

const sv_upload_cover_replace = /** @type {(inputs: Upload_Cover_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Byt omslag`)
};

const tr_upload_cover_replace = /** @type {(inputs: Upload_Cover_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kapağı değiştir`)
};

const zh_upload_cover_replace = /** @type {(inputs: Upload_Cover_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更换封面`)
};

const ja_upload_cover_replace = /** @type {(inputs: Upload_Cover_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`カバーを差し替える`)
};

/**
* | output |
* | --- |
* | "Replace the cover" |
*
* @param {Upload_Cover_ReplaceInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_cover_replace = /** @type {((inputs?: Upload_Cover_ReplaceInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Cover_ReplaceInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_cover_replace(inputs)
	if (locale === "de") return de_upload_cover_replace(inputs)
	if (locale === "fr") return fr_upload_cover_replace(inputs)
	if (locale === "it") return it_upload_cover_replace(inputs)
	if (locale === "nl") return nl_upload_cover_replace(inputs)
	if (locale === "pl") return pl_upload_cover_replace(inputs)
	if (locale === "pt") return pt_upload_cover_replace(inputs)
	if (locale === "ru") return ru_upload_cover_replace(inputs)
	if (locale === "sv") return sv_upload_cover_replace(inputs)
	if (locale === "tr") return tr_upload_cover_replace(inputs)
	if (locale === "zh") return zh_upload_cover_replace(inputs)
	if (locale === "ja") return ja_upload_cover_replace(inputs)
	return en_upload_cover_replace(inputs)
});
