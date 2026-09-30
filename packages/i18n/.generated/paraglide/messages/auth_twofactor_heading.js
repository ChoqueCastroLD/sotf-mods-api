/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Twofactor_HeadingInputs */

const en_auth_twofactor_heading = /** @type {(inputs: Auth_Twofactor_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Two-step verification`)
};

const es_auth_twofactor_heading = /** @type {(inputs: Auth_Twofactor_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verificación en dos pasos`)
};

const de_auth_twofactor_heading = /** @type {(inputs: Auth_Twofactor_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bestätigung in zwei Schritten`)
};

const fr_auth_twofactor_heading = /** @type {(inputs: Auth_Twofactor_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vérification en deux étapes`)
};

const it_auth_twofactor_heading = /** @type {(inputs: Auth_Twofactor_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifica in due passaggi`)
};

const nl_auth_twofactor_heading = /** @type {(inputs: Auth_Twofactor_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verificatie in twee stappen`)
};

const pl_auth_twofactor_heading = /** @type {(inputs: Auth_Twofactor_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Weryfikacja dwuetapowa`)
};

const pt_auth_twofactor_heading = /** @type {(inputs: Auth_Twofactor_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verificação em duas etapas`)
};

const ru_auth_twofactor_heading = /** @type {(inputs: Auth_Twofactor_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Двухэтапная проверка`)
};

const sv_auth_twofactor_heading = /** @type {(inputs: Auth_Twofactor_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tvåstegsverifiering`)
};

const tr_auth_twofactor_heading = /** @type {(inputs: Auth_Twofactor_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İki adımlı doğrulama`)
};

const zh_auth_twofactor_heading = /** @type {(inputs: Auth_Twofactor_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`两步验证`)
};

const ja_auth_twofactor_heading = /** @type {(inputs: Auth_Twofactor_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`2段階認証`)
};

/**
* | output |
* | --- |
* | "Two-step verification" |
*
* @param {Auth_Twofactor_HeadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_twofactor_heading = /** @type {((inputs?: Auth_Twofactor_HeadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Twofactor_HeadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_twofactor_heading(inputs)
	if (locale === "de") return de_auth_twofactor_heading(inputs)
	if (locale === "fr") return fr_auth_twofactor_heading(inputs)
	if (locale === "it") return it_auth_twofactor_heading(inputs)
	if (locale === "nl") return nl_auth_twofactor_heading(inputs)
	if (locale === "pl") return pl_auth_twofactor_heading(inputs)
	if (locale === "pt") return pt_auth_twofactor_heading(inputs)
	if (locale === "ru") return ru_auth_twofactor_heading(inputs)
	if (locale === "sv") return sv_auth_twofactor_heading(inputs)
	if (locale === "tr") return tr_auth_twofactor_heading(inputs)
	if (locale === "zh") return zh_auth_twofactor_heading(inputs)
	if (locale === "ja") return ja_auth_twofactor_heading(inputs)
	return en_auth_twofactor_heading(inputs)
});
