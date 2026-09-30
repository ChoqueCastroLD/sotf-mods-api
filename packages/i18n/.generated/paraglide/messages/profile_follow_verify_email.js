/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Follow_Verify_EmailInputs */

const en_profile_follow_verify_email = /** @type {(inputs: Profile_Follow_Verify_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verify your email address to follow creators.`)
};

const es_profile_follow_verify_email = /** @type {(inputs: Profile_Follow_Verify_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifica tu correo electrónico para seguir a creadores.`)
};

const de_profile_follow_verify_email = /** @type {(inputs: Profile_Follow_Verify_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bestätige deine E-Mail-Adresse, um Erstellern zu folgen.`)
};

const fr_profile_follow_verify_email = /** @type {(inputs: Profile_Follow_Verify_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vérifiez votre adresse e-mail pour suivre des créateurs.`)
};

const it_profile_follow_verify_email = /** @type {(inputs: Profile_Follow_Verify_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifica il tuo indirizzo email per seguire i creatori.`)
};

const nl_profile_follow_verify_email = /** @type {(inputs: Profile_Follow_Verify_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bevestig je e-mailadres om makers te volgen.`)
};

const pl_profile_follow_verify_email = /** @type {(inputs: Profile_Follow_Verify_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Potwierdź adres e-mail, aby obserwować twórców.`)
};

const pt_profile_follow_verify_email = /** @type {(inputs: Profile_Follow_Verify_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifique seu e-mail para seguir criadores.`)
};

const ru_profile_follow_verify_email = /** @type {(inputs: Profile_Follow_Verify_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подтвердите адрес электронной почты, чтобы подписываться на авторов.`)
};

const sv_profile_follow_verify_email = /** @type {(inputs: Profile_Follow_Verify_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifiera din e-postadress för att följa skapare.`)
};

const tr_profile_follow_verify_email = /** @type {(inputs: Profile_Follow_Verify_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Üreticileri takip etmek için e-posta adresini doğrula.`)
};

const zh_profile_follow_verify_email = /** @type {(inputs: Profile_Follow_Verify_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请先验证你的电子邮箱，才能关注创作者。`)
};

const ja_profile_follow_verify_email = /** @type {(inputs: Profile_Follow_Verify_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`クリエイターをフォローするには、メールアドレスを確認してください。`)
};

/**
* | output |
* | --- |
* | "Verify your email address to follow creators." |
*
* @param {Profile_Follow_Verify_EmailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_follow_verify_email = /** @type {((inputs?: Profile_Follow_Verify_EmailInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Follow_Verify_EmailInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_follow_verify_email(inputs)
	if (locale === "de") return de_profile_follow_verify_email(inputs)
	if (locale === "fr") return fr_profile_follow_verify_email(inputs)
	if (locale === "it") return it_profile_follow_verify_email(inputs)
	if (locale === "nl") return nl_profile_follow_verify_email(inputs)
	if (locale === "pl") return pl_profile_follow_verify_email(inputs)
	if (locale === "pt") return pt_profile_follow_verify_email(inputs)
	if (locale === "ru") return ru_profile_follow_verify_email(inputs)
	if (locale === "sv") return sv_profile_follow_verify_email(inputs)
	if (locale === "tr") return tr_profile_follow_verify_email(inputs)
	if (locale === "zh") return zh_profile_follow_verify_email(inputs)
	if (locale === "ja") return ja_profile_follow_verify_email(inputs)
	return en_profile_follow_verify_email(inputs)
});
