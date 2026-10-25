/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Free_Version_HintInputs */

const en_upload_free_version_hint = /** @type {(inputs: Upload_Free_Version_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`For example 1.0.0. Letters, numbers, dots and dashes.`)
};

const es_upload_free_version_hint = /** @type {(inputs: Upload_Free_Version_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Por ejemplo 1.0.0. Letras, números, puntos y guiones.`)
};

const de_upload_free_version_hint = /** @type {(inputs: Upload_Free_Version_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zum Beispiel 1.0.0. Buchstaben, Zahlen, Punkte und Bindestriche.`)
};

const fr_upload_free_version_hint = /** @type {(inputs: Upload_Free_Version_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Par exemple 1.0.0. Lettres, chiffres, points et tirets.`)
};

const it_upload_free_version_hint = /** @type {(inputs: Upload_Free_Version_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ad esempio 1.0.0. Lettere, numeri, punti e trattini.`)
};

const nl_upload_free_version_hint = /** @type {(inputs: Upload_Free_Version_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bijvoorbeeld 1.0.0. Letters, cijfers, punten en streepjes.`)
};

const pl_upload_free_version_hint = /** @type {(inputs: Upload_Free_Version_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Na przykład 1.0.0. Litery, cyfry, kropki i myślniki.`)
};

const pt_upload_free_version_hint = /** @type {(inputs: Upload_Free_Version_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Por exemplo 1.0.0. Letras, números, pontos e hífens.`)
};

const ru_upload_free_version_hint = /** @type {(inputs: Upload_Free_Version_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Например, 1.0.0. Буквы, цифры, точки и дефисы.`)
};

const sv_upload_free_version_hint = /** @type {(inputs: Upload_Free_Version_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Till exempel 1.0.0. Bokstäver, siffror, punkter och bindestreck.`)
};

const tr_upload_free_version_hint = /** @type {(inputs: Upload_Free_Version_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Örneğin 1.0.0. Harfler, rakamlar, nokta ve tire.`)
};

const zh_upload_free_version_hint = /** @type {(inputs: Upload_Free_Version_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`例如 1.0.0。可使用字母、数字、点和连字符。`)
};

const ja_upload_free_version_hint = /** @type {(inputs: Upload_Free_Version_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`例: 1.0.0。英数字、ドット、ハイフンが使えます。`)
};

/**
* | output |
* | --- |
* | "For example 1.0.0. Letters, numbers, dots and dashes." |
*
* @param {Upload_Free_Version_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_free_version_hint = /** @type {((inputs?: Upload_Free_Version_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Free_Version_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_free_version_hint(inputs)
	if (locale === "de") return de_upload_free_version_hint(inputs)
	if (locale === "fr") return fr_upload_free_version_hint(inputs)
	if (locale === "it") return it_upload_free_version_hint(inputs)
	if (locale === "nl") return nl_upload_free_version_hint(inputs)
	if (locale === "pl") return pl_upload_free_version_hint(inputs)
	if (locale === "pt") return pt_upload_free_version_hint(inputs)
	if (locale === "ru") return ru_upload_free_version_hint(inputs)
	if (locale === "sv") return sv_upload_free_version_hint(inputs)
	if (locale === "tr") return tr_upload_free_version_hint(inputs)
	if (locale === "zh") return zh_upload_free_version_hint(inputs)
	if (locale === "ja") return ja_upload_free_version_hint(inputs)
	return en_upload_free_version_hint(inputs)
});
