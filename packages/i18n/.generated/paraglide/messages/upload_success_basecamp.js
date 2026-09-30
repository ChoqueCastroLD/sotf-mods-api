/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Success_BasecampInputs */

const en_upload_success_basecamp = /** @type {(inputs: Upload_Success_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Back to Basecamp`)
};

const es_upload_success_basecamp = /** @type {(inputs: Upload_Success_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volver al Campamento`)
};

const de_upload_success_basecamp = /** @type {(inputs: Upload_Success_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zurück zum Basislager`)
};

const fr_upload_success_basecamp = /** @type {(inputs: Upload_Success_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retour au camp de base`)
};

const it_upload_success_basecamp = /** @type {(inputs: Upload_Success_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Torna al campo base`)
};

const nl_upload_success_basecamp = /** @type {(inputs: Upload_Success_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Terug naar het basiskamp`)
};

const pl_upload_success_basecamp = /** @type {(inputs: Upload_Success_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wróć do obozu`)
};

const pt_upload_success_basecamp = /** @type {(inputs: Upload_Success_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voltar ao Acampamento`)
};

const ru_upload_success_basecamp = /** @type {(inputs: Upload_Success_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вернуться в лагерь`)
};

const sv_upload_success_basecamp = /** @type {(inputs: Upload_Success_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tillbaka till baslägret`)
};

const tr_upload_success_basecamp = /** @type {(inputs: Upload_Success_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ana Kamp’a dön`)
};

const zh_upload_success_basecamp = /** @type {(inputs: Upload_Success_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`返回营地`)
};

const ja_upload_success_basecamp = /** @type {(inputs: Upload_Success_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ベースキャンプに戻る`)
};

/**
* | output |
* | --- |
* | "Back to Basecamp" |
*
* @param {Upload_Success_BasecampInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_success_basecamp = /** @type {((inputs?: Upload_Success_BasecampInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Success_BasecampInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_success_basecamp(inputs)
	if (locale === "de") return de_upload_success_basecamp(inputs)
	if (locale === "fr") return fr_upload_success_basecamp(inputs)
	if (locale === "it") return it_upload_success_basecamp(inputs)
	if (locale === "nl") return nl_upload_success_basecamp(inputs)
	if (locale === "pl") return pl_upload_success_basecamp(inputs)
	if (locale === "pt") return pt_upload_success_basecamp(inputs)
	if (locale === "ru") return ru_upload_success_basecamp(inputs)
	if (locale === "sv") return sv_upload_success_basecamp(inputs)
	if (locale === "tr") return tr_upload_success_basecamp(inputs)
	if (locale === "zh") return zh_upload_success_basecamp(inputs)
	if (locale === "ja") return ja_upload_success_basecamp(inputs)
	return en_upload_success_basecamp(inputs)
});
