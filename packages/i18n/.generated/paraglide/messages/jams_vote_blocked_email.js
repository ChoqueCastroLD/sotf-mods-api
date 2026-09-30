/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Vote_Blocked_EmailInputs */

const en_jams_vote_blocked_email = /** @type {(inputs: Jams_Vote_Blocked_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verify your email address to vote.`)
};

const es_jams_vote_blocked_email = /** @type {(inputs: Jams_Vote_Blocked_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifica tu correo electrónico para votar.`)
};

const de_jams_vote_blocked_email = /** @type {(inputs: Jams_Vote_Blocked_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bestätige deine E-Mail-Adresse, um abzustimmen.`)
};

const fr_jams_vote_blocked_email = /** @type {(inputs: Jams_Vote_Blocked_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vérifiez votre adresse e-mail pour voter.`)
};

const it_jams_vote_blocked_email = /** @type {(inputs: Jams_Vote_Blocked_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifica il tuo indirizzo e-mail per votare.`)
};

const nl_jams_vote_blocked_email = /** @type {(inputs: Jams_Vote_Blocked_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifieer je e-mailadres om te stemmen.`)
};

const pl_jams_vote_blocked_email = /** @type {(inputs: Jams_Vote_Blocked_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zweryfikuj adres e-mail, aby głosować.`)
};

const pt_jams_vote_blocked_email = /** @type {(inputs: Jams_Vote_Blocked_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifique seu e-mail para votar.`)
};

const ru_jams_vote_blocked_email = /** @type {(inputs: Jams_Vote_Blocked_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подтвердите адрес почты, чтобы голосовать.`)
};

const sv_jams_vote_blocked_email = /** @type {(inputs: Jams_Vote_Blocked_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifiera din e-postadress för att rösta.`)
};

const tr_jams_vote_blocked_email = /** @type {(inputs: Jams_Vote_Blocked_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oy vermek için e-posta adresinizi doğrulayın.`)
};

const zh_jams_vote_blocked_email = /** @type {(inputs: Jams_Vote_Blocked_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请先验证邮箱后再投票。`)
};

const ja_jams_vote_blocked_email = /** @type {(inputs: Jams_Vote_Blocked_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`投票するにはメールアドレスの認証が必要です。`)
};

/**
* | output |
* | --- |
* | "Verify your email address to vote." |
*
* @param {Jams_Vote_Blocked_EmailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_vote_blocked_email = /** @type {((inputs?: Jams_Vote_Blocked_EmailInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Vote_Blocked_EmailInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_vote_blocked_email(inputs)
	if (locale === "de") return de_jams_vote_blocked_email(inputs)
	if (locale === "fr") return fr_jams_vote_blocked_email(inputs)
	if (locale === "it") return it_jams_vote_blocked_email(inputs)
	if (locale === "nl") return nl_jams_vote_blocked_email(inputs)
	if (locale === "pl") return pl_jams_vote_blocked_email(inputs)
	if (locale === "pt") return pt_jams_vote_blocked_email(inputs)
	if (locale === "ru") return ru_jams_vote_blocked_email(inputs)
	if (locale === "sv") return sv_jams_vote_blocked_email(inputs)
	if (locale === "tr") return tr_jams_vote_blocked_email(inputs)
	if (locale === "zh") return zh_jams_vote_blocked_email(inputs)
	if (locale === "ja") return ja_jams_vote_blocked_email(inputs)
	return en_jams_vote_blocked_email(inputs)
});
