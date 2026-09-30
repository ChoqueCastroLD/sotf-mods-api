/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Vote_Blocked_ActivityInputs */

const en_jams_vote_blocked_activity = /** @type {(inputs: Jams_Vote_Blocked_ActivityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Take part in the community a little more to unlock voting.`)
};

const es_jams_vote_blocked_activity = /** @type {(inputs: Jams_Vote_Blocked_ActivityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Participa un poco más en la comunidad para desbloquear la votación.`)
};

const de_jams_vote_blocked_activity = /** @type {(inputs: Jams_Vote_Blocked_ActivityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beteilige dich etwas mehr an der Community, um die Abstimmung freizuschalten.`)
};

const fr_jams_vote_blocked_activity = /** @type {(inputs: Jams_Vote_Blocked_ActivityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Participez un peu plus à la communauté pour débloquer le vote.`)
};

const it_jams_vote_blocked_activity = /** @type {(inputs: Jams_Vote_Blocked_ActivityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Partecipa un po' di più alla community per sbloccare la votazione.`)
};

const nl_jams_vote_blocked_activity = /** @type {(inputs: Jams_Vote_Blocked_ActivityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Doe wat meer mee in de community om het stemmen te ontgrendelen.`)
};

const pl_jams_vote_blocked_activity = /** @type {(inputs: Jams_Vote_Blocked_ActivityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bądź nieco aktywniejszy w społeczności, aby odblokować głosowanie.`)
};

const pt_jams_vote_blocked_activity = /** @type {(inputs: Jams_Vote_Blocked_ActivityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Participe um pouco mais da comunidade para liberar a votação.`)
};

const ru_jams_vote_blocked_activity = /** @type {(inputs: Jams_Vote_Blocked_ActivityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Немного поучаствуйте в жизни сообщества, чтобы открыть голосование.`)
};

const sv_jams_vote_blocked_activity = /** @type {(inputs: Jams_Vote_Blocked_ActivityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delta lite mer i communityn för att låsa upp röstning.`)
};

const tr_jams_vote_blocked_activity = /** @type {(inputs: Jams_Vote_Blocked_ActivityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oylamanın kilidini açmak için toplulukta biraz daha aktif olun.`)
};

const zh_jams_vote_blocked_activity = /** @type {(inputs: Jams_Vote_Blocked_ActivityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`再多参与一些社区活动即可解锁投票。`)
};

const ja_jams_vote_blocked_activity = /** @type {(inputs: Jams_Vote_Blocked_ActivityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コミュニティでもう少し活動すると投票できるようになります。`)
};

/**
* | output |
* | --- |
* | "Take part in the community a little more to unlock voting." |
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
