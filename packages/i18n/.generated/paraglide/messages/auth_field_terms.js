/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Field_TermsInputs */

const en_auth_field_terms = /** @type {(inputs: Auth_Field_TermsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I accept the terms of use and the privacy policy.`)
};

const es_auth_field_terms = /** @type {(inputs: Auth_Field_TermsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Acepto las condiciones de uso y la política de privacidad.`)
};

const de_auth_field_terms = /** @type {(inputs: Auth_Field_TermsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ich akzeptiere die Nutzungsbedingungen und die Datenschutzerklärung.`)
};

const fr_auth_field_terms = /** @type {(inputs: Auth_Field_TermsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`J’accepte les conditions d’utilisation et la politique de confidentialité.`)
};

const it_auth_field_terms = /** @type {(inputs: Auth_Field_TermsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accetto i termini d’uso e l’informativa sulla privacy.`)
};

const nl_auth_field_terms = /** @type {(inputs: Auth_Field_TermsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ik ga akkoord met de gebruiksvoorwaarden en het privacybeleid.`)
};

const pl_auth_field_terms = /** @type {(inputs: Auth_Field_TermsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Akceptuję warunki korzystania i politykę prywatności.`)
};

const pt_auth_field_terms = /** @type {(inputs: Auth_Field_TermsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aceito os termos de uso e a política de privacidade.`)
};

const ru_auth_field_terms = /** @type {(inputs: Auth_Field_TermsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Я принимаю условия использования и политику конфиденциальности.`)
};

const sv_auth_field_terms = /** @type {(inputs: Auth_Field_TermsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jag godkänner användarvillkoren och integritetspolicyn.`)
};

const tr_auth_field_terms = /** @type {(inputs: Auth_Field_TermsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kullanım koşullarını ve gizlilik politikasını kabul ediyorum.`)
};

const zh_auth_field_terms = /** @type {(inputs: Auth_Field_TermsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`我接受使用条款和隐私政策。`)
};

const ja_auth_field_terms = /** @type {(inputs: Auth_Field_TermsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`利用規約とプライバシーポリシーに同意します。`)
};

/**
* | output |
* | --- |
* | "I accept the terms of use and the privacy policy." |
*
* @param {Auth_Field_TermsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_field_terms = /** @type {((inputs?: Auth_Field_TermsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Field_TermsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_field_terms(inputs)
	if (locale === "de") return de_auth_field_terms(inputs)
	if (locale === "fr") return fr_auth_field_terms(inputs)
	if (locale === "it") return it_auth_field_terms(inputs)
	if (locale === "nl") return nl_auth_field_terms(inputs)
	if (locale === "pl") return pl_auth_field_terms(inputs)
	if (locale === "pt") return pt_auth_field_terms(inputs)
	if (locale === "ru") return ru_auth_field_terms(inputs)
	if (locale === "sv") return sv_auth_field_terms(inputs)
	if (locale === "tr") return tr_auth_field_terms(inputs)
	if (locale === "zh") return zh_auth_field_terms(inputs)
	if (locale === "ja") return ja_auth_field_terms(inputs)
	return en_auth_field_terms(inputs)
});
