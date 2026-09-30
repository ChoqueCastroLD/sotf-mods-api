/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Lane_Reports_HintInputs */

const en_ranger_lane_reports_hint = /** @type {(inputs: Ranger_Lane_Reports_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open reports from the community.`)
};

const es_ranger_lane_reports_hint = /** @type {(inputs: Ranger_Lane_Reports_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reportes abiertos de la comunidad.`)
};

const de_ranger_lane_reports_hint = /** @type {(inputs: Ranger_Lane_Reports_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Offene Meldungen aus der Community.`)
};

const fr_ranger_lane_reports_hint = /** @type {(inputs: Ranger_Lane_Reports_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signalements ouverts par la communauté.`)
};

const it_ranger_lane_reports_hint = /** @type {(inputs: Ranger_Lane_Reports_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segnalazioni aperte della community.`)
};

const nl_ranger_lane_reports_hint = /** @type {(inputs: Ranger_Lane_Reports_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open meldingen uit de community.`)
};

const pl_ranger_lane_reports_hint = /** @type {(inputs: Ranger_Lane_Reports_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otwarte zgłoszenia od społeczności.`)
};

const pt_ranger_lane_reports_hint = /** @type {(inputs: Ranger_Lane_Reports_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Denúncias abertas da comunidade.`)
};

const ru_ranger_lane_reports_hint = /** @type {(inputs: Ranger_Lane_Reports_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Открытые жалобы от сообщества.`)
};

const sv_ranger_lane_reports_hint = /** @type {(inputs: Ranger_Lane_Reports_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öppna anmälningar från communityn.`)
};

const tr_ranger_lane_reports_hint = /** @type {(inputs: Ranger_Lane_Reports_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Topluluktan gelen açık şikâyetler.`)
};

const zh_ranger_lane_reports_hint = /** @type {(inputs: Ranger_Lane_Reports_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`社区提交的未处理举报。`)
};

const ja_ranger_lane_reports_hint = /** @type {(inputs: Ranger_Lane_Reports_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コミュニティからの未対応の報告。`)
};

/**
* | output |
* | --- |
* | "Open reports from the community." |
*
* @param {Ranger_Lane_Reports_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_lane_reports_hint = /** @type {((inputs?: Ranger_Lane_Reports_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Lane_Reports_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_lane_reports_hint(inputs)
	if (locale === "de") return de_ranger_lane_reports_hint(inputs)
	if (locale === "fr") return fr_ranger_lane_reports_hint(inputs)
	if (locale === "it") return it_ranger_lane_reports_hint(inputs)
	if (locale === "nl") return nl_ranger_lane_reports_hint(inputs)
	if (locale === "pl") return pl_ranger_lane_reports_hint(inputs)
	if (locale === "pt") return pt_ranger_lane_reports_hint(inputs)
	if (locale === "ru") return ru_ranger_lane_reports_hint(inputs)
	if (locale === "sv") return sv_ranger_lane_reports_hint(inputs)
	if (locale === "tr") return tr_ranger_lane_reports_hint(inputs)
	if (locale === "zh") return zh_ranger_lane_reports_hint(inputs)
	if (locale === "ja") return ja_ranger_lane_reports_hint(inputs)
	return en_ranger_lane_reports_hint(inputs)
});
