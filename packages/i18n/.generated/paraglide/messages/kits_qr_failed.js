/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Qr_FailedInputs */

const en_kits_qr_failed = /** @type {(inputs: Kits_Qr_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn’t draw the QR code.`)
};

const es_kits_qr_failed = /** @type {(inputs: Kits_Qr_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se ha podido generar el código QR.`)
};

const de_kits_qr_failed = /** @type {(inputs: Kits_Qr_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der QR-Code konnte nicht erstellt werden.`)
};

const fr_kits_qr_failed = /** @type {(inputs: Kits_Qr_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible de générer le code QR.`)
};

const it_kits_qr_failed = /** @type {(inputs: Kits_Qr_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile generare il codice QR.`)
};

const nl_kits_qr_failed = /** @type {(inputs: Kits_Qr_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De QR-code kon niet worden gemaakt.`)
};

const pl_kits_qr_failed = /** @type {(inputs: Kits_Qr_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się wygenerować kodu QR.`)
};

const pt_kits_qr_failed = /** @type {(inputs: Kits_Qr_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível gerar o código QR.`)
};

const ru_kits_qr_failed = /** @type {(inputs: Kits_Qr_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось построить QR-код.`)
};

const sv_kits_qr_failed = /** @type {(inputs: Kits_Qr_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det gick inte att rita QR-koden.`)
};

const tr_kits_qr_failed = /** @type {(inputs: Kits_Qr_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`QR kodu oluşturulamadı.`)
};

const zh_kits_qr_failed = /** @type {(inputs: Kits_Qr_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法生成二维码。`)
};

const ja_kits_qr_failed = /** @type {(inputs: Kits_Qr_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`QR コードを作成できませんでした。`)
};

/**
* | output |
* | --- |
* | "Couldn’t draw the QR code." |
*
* @param {Kits_Qr_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_qr_failed = /** @type {((inputs?: Kits_Qr_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Qr_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_qr_failed(inputs)
	if (locale === "de") return de_kits_qr_failed(inputs)
	if (locale === "fr") return fr_kits_qr_failed(inputs)
	if (locale === "it") return it_kits_qr_failed(inputs)
	if (locale === "nl") return nl_kits_qr_failed(inputs)
	if (locale === "pl") return pl_kits_qr_failed(inputs)
	if (locale === "pt") return pt_kits_qr_failed(inputs)
	if (locale === "ru") return ru_kits_qr_failed(inputs)
	if (locale === "sv") return sv_kits_qr_failed(inputs)
	if (locale === "tr") return tr_kits_qr_failed(inputs)
	if (locale === "zh") return zh_kits_qr_failed(inputs)
	if (locale === "ja") return ja_kits_qr_failed(inputs)
	return en_kits_qr_failed(inputs)
});
