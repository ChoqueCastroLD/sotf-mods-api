/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Vote_Blocked_ActivityInputs */

const en_jams_vote_blocked_activity = /** @type {(inputs: Jams_Vote_Blocked_ActivityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your account does not have enough activity to vote yet.`)
};

const es_jams_vote_blocked_activity = /** @type {(inputs: Jams_Vote_Blocked_ActivityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu cuenta aún no tiene suficiente actividad para votar.`)
};

const de_jams_vote_blocked_activity = /** @type {(inputs: Jams_Vote_Blocked_ActivityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dein Konto hat noch nicht genug Aktivität, um abzustimmen.`)
};

const fr_jams_vote_blocked_activity = /** @type {(inputs: Jams_Vote_Blocked_ActivityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votre compte n’a pas encore assez d’activité pour voter.`)
};

const it_jams_vote_blocked_activity = /** @type {(inputs: Jams_Vote_Blocked_ActivityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il tuo account non ha ancora abbastanza attività per votare.`)
};

const nl_jams_vote_blocked_activity = /** @type {(inputs: Jams_Vote_Blocked_ActivityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je account heeft nog niet genoeg activiteit om te stemmen.`)
};

const pl_jams_vote_blocked_activity = /** @type {(inputs: Jams_Vote_Blocked_ActivityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twoje konto nie ma jeszcze wystarczającej aktywności, aby głosować.`)
};

const pt_jams_vote_blocked_activity = /** @type {(inputs: Jams_Vote_Blocked_ActivityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sua conta ainda não tem atividade suficiente para votar.`)
};

const ru_jams_vote_blocked_activity = /** @type {(inputs: Jams_Vote_Blocked_ActivityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`На вашем аккаунте пока недостаточно активности, чтобы голосовать.`)
};

const sv_jams_vote_blocked_activity = /** @type {(inputs: Jams_Vote_Blocked_ActivityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ditt konto har ännu inte tillräcklig aktivitet för att rösta.`)
};

const tr_jams_vote_blocked_activity = /** @type {(inputs: Jams_Vote_Blocked_ActivityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hesabının oy vermek için henüz yeterli etkinliği yok.`)
};

const zh_jams_vote_blocked_activity = /** @type {(inputs: Jams_Vote_Blocked_ActivityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的账号活动还不够，暂时不能投票。`)
};

const ja_jams_vote_blocked_activity = /** @type {(inputs: Jams_Vote_Blocked_ActivityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アカウントの活動がまだ少ないため、投票できません。`)
};

/**
* | output |
* | --- |
* | "Your account does not have enough activity to vote yet." |
*
* @param {Jams_Vote_Blocked_ActivityInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_vote_blocked_activity = /** @type {((inputs?: Jams_Vote_Blocked_ActivityInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Vote_Blocked_ActivityInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_vote_blocked_activity(inputs)
	if (locale === "de") return de_jams_vote_blocked_activity(inputs)
	if (locale === "fr") return fr_jams_vote_blocked_activity(inputs)
	if (locale === "it") return it_jams_vote_blocked_activity(inputs)
	if (locale === "nl") return nl_jams_vote_blocked_activity(inputs)
	if (locale === "pl") return pl_jams_vote_blocked_activity(inputs)
	if (locale === "pt") return pt_jams_vote_blocked_activity(inputs)
	if (locale === "ru") return ru_jams_vote_blocked_activity(inputs)
	if (locale === "sv") return sv_jams_vote_blocked_activity(inputs)
	if (locale === "tr") return tr_jams_vote_blocked_activity(inputs)
	if (locale === "zh") return zh_jams_vote_blocked_activity(inputs)
	if (locale === "ja") return ja_jams_vote_blocked_activity(inputs)
	return en_jams_vote_blocked_activity(inputs)
});
