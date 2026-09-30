/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Vote_Blocked_NewInputs */

const en_jams_vote_blocked_new = /** @type {(inputs: Jams_Vote_Blocked_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your account is too new to vote in this jam.`)
};

const es_jams_vote_blocked_new = /** @type {(inputs: Jams_Vote_Blocked_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu cuenta es demasiado reciente para votar en este jam.`)
};

const de_jams_vote_blocked_new = /** @type {(inputs: Jams_Vote_Blocked_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dein Konto ist zu neu, um in dieser Jam abzustimmen.`)
};

const fr_jams_vote_blocked_new = /** @type {(inputs: Jams_Vote_Blocked_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votre compte est trop récent pour voter dans ce jam.`)
};

const it_jams_vote_blocked_new = /** @type {(inputs: Jams_Vote_Blocked_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il tuo account è troppo recente per votare in questo jam.`)
};

const nl_jams_vote_blocked_new = /** @type {(inputs: Jams_Vote_Blocked_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je account is te nieuw om in deze jam te stemmen.`)
};

const pl_jams_vote_blocked_new = /** @type {(inputs: Jams_Vote_Blocked_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twoje konto jest zbyt nowe, aby głosować w tym jamie.`)
};

const pt_jams_vote_blocked_new = /** @type {(inputs: Jams_Vote_Blocked_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sua conta é muito recente para votar neste jam.`)
};

const ru_jams_vote_blocked_new = /** @type {(inputs: Jams_Vote_Blocked_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваш аккаунт слишком новый для голосования в этом джеме.`)
};

const sv_jams_vote_blocked_new = /** @type {(inputs: Jams_Vote_Blocked_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ditt konto är för nytt för att rösta i den här jammen.`)
};

const tr_jams_vote_blocked_new = /** @type {(inputs: Jams_Vote_Blocked_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hesabınız bu jam'de oy vermek için çok yeni.`)
};

const zh_jams_vote_blocked_new = /** @type {(inputs: Jams_Vote_Blocked_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的账号注册时间太短，暂时无法在本场 Jam 投票。`)
};

const ja_jams_vote_blocked_new = /** @type {(inputs: Jams_Vote_Blocked_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アカウントが新しすぎるため、このジャムでは投票できません。`)
};

/**
* | output |
* | --- |
* | "Your account is too new to vote in this jam." |
*
* @param {Jams_Vote_Blocked_NewInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_vote_blocked_new = /** @type {((inputs?: Jams_Vote_Blocked_NewInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Vote_Blocked_NewInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_vote_blocked_new(inputs)
	if (locale === "de") return de_jams_vote_blocked_new(inputs)
	if (locale === "fr") return fr_jams_vote_blocked_new(inputs)
	if (locale === "it") return it_jams_vote_blocked_new(inputs)
	if (locale === "nl") return nl_jams_vote_blocked_new(inputs)
	if (locale === "pl") return pl_jams_vote_blocked_new(inputs)
	if (locale === "pt") return pt_jams_vote_blocked_new(inputs)
	if (locale === "ru") return ru_jams_vote_blocked_new(inputs)
	if (locale === "sv") return sv_jams_vote_blocked_new(inputs)
	if (locale === "tr") return tr_jams_vote_blocked_new(inputs)
	if (locale === "zh") return zh_jams_vote_blocked_new(inputs)
	if (locale === "ja") return ja_jams_vote_blocked_new(inputs)
	return en_jams_vote_blocked_new(inputs)
});
