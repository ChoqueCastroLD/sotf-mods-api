/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Twofactor_SubmitInputs */

const en_auth_twofactor_submit = /** @type {(inputs: Auth_Twofactor_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verify`)
};

const es_auth_twofactor_submit = /** @type {(inputs: Auth_Twofactor_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verificar`)
};

const de_auth_twofactor_submit = /** @type {(inputs: Auth_Twofactor_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bestätigen`)
};

const fr_auth_twofactor_submit = /** @type {(inputs: Auth_Twofactor_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vérifier`)
};

const it_auth_twofactor_submit = /** @type {(inputs: Auth_Twofactor_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifica`)
};

const nl_auth_twofactor_submit = /** @type {(inputs: Auth_Twofactor_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifiëren`)
};

const pl_auth_twofactor_submit = /** @type {(inputs: Auth_Twofactor_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zweryfikuj`)
};

const pt_auth_twofactor_submit = /** @type {(inputs: Auth_Twofactor_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verificar`)
};

const ru_auth_twofactor_submit = /** @type {(inputs: Auth_Twofactor_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подтвердить`)
};

const sv_auth_twofactor_submit = /** @type {(inputs: Auth_Twofactor_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifiera`)
};

const tr_auth_twofactor_submit = /** @type {(inputs: Auth_Twofactor_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Doğrula`)
};

const zh_auth_twofactor_submit = /** @type {(inputs: Auth_Twofactor_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`验证`)
};

const ja_auth_twofactor_submit = /** @type {(inputs: Auth_Twofactor_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`確認`)
};

/**
* | output |
* | --- |
* | "Verify" |
*
* @param {Auth_Twofactor_SubmitInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_twofactor_submit = /** @type {((inputs?: Auth_Twofactor_SubmitInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Twofactor_SubmitInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_twofactor_submit(inputs)
	if (locale === "de") return de_auth_twofactor_submit(inputs)
	if (locale === "fr") return fr_auth_twofactor_submit(inputs)
	if (locale === "it") return it_auth_twofactor_submit(inputs)
	if (locale === "nl") return nl_auth_twofactor_submit(inputs)
	if (locale === "pl") return pl_auth_twofactor_submit(inputs)
	if (locale === "pt") return pt_auth_twofactor_submit(inputs)
	if (locale === "ru") return ru_auth_twofactor_submit(inputs)
	if (locale === "sv") return sv_auth_twofactor_submit(inputs)
	if (locale === "tr") return tr_auth_twofactor_submit(inputs)
	if (locale === "zh") return zh_auth_twofactor_submit(inputs)
	if (locale === "ja") return ja_auth_twofactor_submit(inputs)
	return en_auth_twofactor_submit(inputs)
});
