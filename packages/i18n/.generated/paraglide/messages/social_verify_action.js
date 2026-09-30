/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Verify_ActionInputs */

const en_social_verify_action = /** @type {(inputs: Social_Verify_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verify e-mail`)
};

const es_social_verify_action = /** @type {(inputs: Social_Verify_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verificar correo`)
};

const de_social_verify_action = /** @type {(inputs: Social_Verify_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-Mail bestätigen`)
};

const fr_social_verify_action = /** @type {(inputs: Social_Verify_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vérifier l’e-mail`)
};

const it_social_verify_action = /** @type {(inputs: Social_Verify_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifica e-mail`)
};

const nl_social_verify_action = /** @type {(inputs: Social_Verify_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-mail bevestigen`)
};

const pl_social_verify_action = /** @type {(inputs: Social_Verify_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zweryfikuj e-mail`)
};

const pt_social_verify_action = /** @type {(inputs: Social_Verify_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verificar e-mail`)
};

const ru_social_verify_action = /** @type {(inputs: Social_Verify_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подтвердить e-mail`)
};

const sv_social_verify_action = /** @type {(inputs: Social_Verify_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifiera e-post`)
};

const tr_social_verify_action = /** @type {(inputs: Social_Verify_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-postayı doğrula`)
};

const zh_social_verify_action = /** @type {(inputs: Social_Verify_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`验证邮箱`)
};

const ja_social_verify_action = /** @type {(inputs: Social_Verify_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メールを確認`)
};

/**
* | output |
* | --- |
* | "Verify e-mail" |
*
* @param {Social_Verify_ActionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_verify_action = /** @type {((inputs?: Social_Verify_ActionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Verify_ActionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_verify_action(inputs)
	if (locale === "de") return de_social_verify_action(inputs)
	if (locale === "fr") return fr_social_verify_action(inputs)
	if (locale === "it") return it_social_verify_action(inputs)
	if (locale === "nl") return nl_social_verify_action(inputs)
	if (locale === "pl") return pl_social_verify_action(inputs)
	if (locale === "pt") return pt_social_verify_action(inputs)
	if (locale === "ru") return ru_social_verify_action(inputs)
	if (locale === "sv") return sv_social_verify_action(inputs)
	if (locale === "tr") return tr_social_verify_action(inputs)
	if (locale === "zh") return zh_social_verify_action(inputs)
	if (locale === "ja") return ja_social_verify_action(inputs)
	return en_social_verify_action(inputs)
});
