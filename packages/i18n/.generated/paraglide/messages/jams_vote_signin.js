/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Vote_SigninInputs */

const en_jams_vote_signin = /** @type {(inputs: Jams_Vote_SigninInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log in to vote`)
};

const es_jams_vote_signin = /** @type {(inputs: Jams_Vote_SigninInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inicia sesión para votar`)
};

const de_jams_vote_signin = /** @type {(inputs: Jams_Vote_SigninInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zum Abstimmen anmelden`)
};

const fr_jams_vote_signin = /** @type {(inputs: Jams_Vote_SigninInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connectez-vous pour voter`)
};

const it_jams_vote_signin = /** @type {(inputs: Jams_Vote_SigninInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accedi per votare`)
};

const nl_jams_vote_signin = /** @type {(inputs: Jams_Vote_SigninInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log in om te stemmen`)
};

const pl_jams_vote_signin = /** @type {(inputs: Jams_Vote_SigninInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaloguj się, aby głosować`)
};

const pt_jams_vote_signin = /** @type {(inputs: Jams_Vote_SigninInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entre para votar`)
};

const ru_jams_vote_signin = /** @type {(inputs: Jams_Vote_SigninInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Войдите, чтобы голосовать`)
};

const sv_jams_vote_signin = /** @type {(inputs: Jams_Vote_SigninInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logga in för att rösta`)
};

const tr_jams_vote_signin = /** @type {(inputs: Jams_Vote_SigninInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oy vermek için giriş yap`)
};

const zh_jams_vote_signin = /** @type {(inputs: Jams_Vote_SigninInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`登录后投票`)
};

const ja_jams_vote_signin = /** @type {(inputs: Jams_Vote_SigninInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ログインして投票`)
};

/**
* | output |
* | --- |
* | "Log in to vote" |
*
* @param {Jams_Vote_SigninInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_vote_signin = /** @type {((inputs?: Jams_Vote_SigninInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Vote_SigninInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_vote_signin(inputs)
	if (locale === "de") return de_jams_vote_signin(inputs)
	if (locale === "fr") return fr_jams_vote_signin(inputs)
	if (locale === "it") return it_jams_vote_signin(inputs)
	if (locale === "nl") return nl_jams_vote_signin(inputs)
	if (locale === "pl") return pl_jams_vote_signin(inputs)
	if (locale === "pt") return pt_jams_vote_signin(inputs)
	if (locale === "ru") return ru_jams_vote_signin(inputs)
	if (locale === "sv") return sv_jams_vote_signin(inputs)
	if (locale === "tr") return tr_jams_vote_signin(inputs)
	if (locale === "zh") return zh_jams_vote_signin(inputs)
	if (locale === "ja") return ja_jams_vote_signin(inputs)
	return en_jams_vote_signin(inputs)
});
