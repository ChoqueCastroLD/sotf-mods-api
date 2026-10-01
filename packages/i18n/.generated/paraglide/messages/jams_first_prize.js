/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_First_PrizeInputs */

const en_jams_first_prize = /** @type {(inputs: Jams_First_PrizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Every entry earns a participant badge; podium places and the overall win earn more.`)
};

const es_jams_first_prize = /** @type {(inputs: Jams_First_PrizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cada participación gana una insignia de participante; los puestos del podio y la victoria global dan más.`)
};

const de_jams_first_prize = /** @type {(inputs: Jams_First_PrizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jeder Beitrag erhält ein Teilnehmerabzeichen; Podiumsplätze und der Gesamtsieg bringen mehr.`)
};

const fr_jams_first_prize = /** @type {(inputs: Jams_First_PrizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chaque participation reçoit un badge de participant ; les places du podium et la victoire générale en rapportent davantage.`)
};

const it_jams_first_prize = /** @type {(inputs: Jams_First_PrizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ogni iscrizione ottiene un badge di partecipante; i posti sul podio e la vittoria assoluta ne fanno ottenere di più.`)
};

const nl_jams_first_prize = /** @type {(inputs: Jams_First_PrizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elke inzending krijgt een deelnemersbadge; podiumplekken en de algehele winst leveren meer op.`)
};

const pl_jams_first_prize = /** @type {(inputs: Jams_First_PrizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Każde zgłoszenie otrzymuje odznakę uczestnika; miejsca na podium i zwycięstwo ogólne dają kolejne.`)
};

const pt_jams_first_prize = /** @type {(inputs: Jams_First_PrizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cada inscrição ganha uma insígnia de participante; lugares no pódio e a vitória geral rendem mais.`)
};

const ru_jams_first_prize = /** @type {(inputs: Jams_First_PrizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Каждая работа получает значок участника; места на пьедестале и общая победа дают больше.`)
};

const sv_jams_first_prize = /** @type {(inputs: Jams_First_PrizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Varje bidrag ger ett deltagarmärke; prispallsplatser och totalsegern ger fler.`)
};

const tr_jams_first_prize = /** @type {(inputs: Jams_First_PrizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Her başvuru bir katılımcı rozeti kazanır; podyum yerleri ve genel birincilik daha fazlasını getirir.`)
};

const zh_jams_first_prize = /** @type {(inputs: Jams_First_PrizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`每件作品都能获得参与徽章；登上领奖台和获得总冠军还有更多奖励。`)
};

const ja_jams_first_prize = /** @type {(inputs: Jams_First_PrizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`応募作品には参加バッジが贈られ、表彰台入りと総合優勝ではさらにバッジがもらえます。`)
};

/**
* | output |
* | --- |
* | "Every entry earns a participant badge; podium places and the overall win earn more." |
*
* @param {Jams_First_PrizeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_first_prize = /** @type {((inputs?: Jams_First_PrizeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_First_PrizeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_first_prize(inputs)
	if (locale === "de") return de_jams_first_prize(inputs)
	if (locale === "fr") return fr_jams_first_prize(inputs)
	if (locale === "it") return it_jams_first_prize(inputs)
	if (locale === "nl") return nl_jams_first_prize(inputs)
	if (locale === "pl") return pl_jams_first_prize(inputs)
	if (locale === "pt") return pt_jams_first_prize(inputs)
	if (locale === "ru") return ru_jams_first_prize(inputs)
	if (locale === "sv") return sv_jams_first_prize(inputs)
	if (locale === "tr") return tr_jams_first_prize(inputs)
	if (locale === "zh") return zh_jams_first_prize(inputs)
	if (locale === "ja") return ja_jams_first_prize(inputs)
	return en_jams_first_prize(inputs)
});
