/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Report_IntroInputs */

const en_social_report_intro = /** @type {(inputs: Social_Report_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rangers review every report. Tell them what’s wrong.`)
};

const es_social_report_intro = /** @type {(inputs: Social_Report_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los rangers revisan cada reporte. Cuéntales qué pasa.`)
};

const de_social_report_intro = /** @type {(inputs: Social_Report_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Ranger prüfen jede Meldung. Sag ihnen, was nicht stimmt.`)
};

const fr_social_report_intro = /** @type {(inputs: Social_Report_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les rangers examinent chaque signalement. Dites-leur ce qui ne va pas.`)
};

const it_social_report_intro = /** @type {(inputs: Social_Report_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I ranger esaminano ogni segnalazione. Spiega cosa non va.`)
};

const nl_social_report_intro = /** @type {(inputs: Social_Report_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De rangers bekijken elke melding. Vertel wat er mis is.`)
};

const pl_social_report_intro = /** @type {(inputs: Social_Report_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rangerzy sprawdzają każde zgłoszenie. Napisz, co jest nie tak.`)
};

const pt_social_report_intro = /** @type {(inputs: Social_Report_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Os rangers analisam cada denúncia. Conte o que há de errado.`)
};

const ru_social_report_intro = /** @type {(inputs: Social_Report_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Рейнджеры проверяют каждую жалобу. Расскажите, что не так.`)
};

const sv_social_report_intro = /** @type {(inputs: Social_Report_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rangers går igenom varje anmälan. Berätta vad som är fel.`)
};

const tr_social_report_intro = /** @type {(inputs: Social_Report_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Korucular her şikâyeti inceler. Sorunun ne olduğunu anlat.`)
};

const zh_social_report_intro = /** @type {(inputs: Social_Report_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`巡林员会审核每一条举报。请说明问题所在。`)
};

const ja_social_report_intro = /** @type {(inputs: Social_Report_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レンジャーがすべての通報を確認します。何が問題か教えてください。`)
};

/**
* | output |
* | --- |
* | "Rangers review every report. Tell them what’s wrong." |
*
* @param {Social_Report_IntroInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_report_intro = /** @type {((inputs?: Social_Report_IntroInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Report_IntroInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_report_intro(inputs)
	if (locale === "de") return de_social_report_intro(inputs)
	if (locale === "fr") return fr_social_report_intro(inputs)
	if (locale === "it") return it_social_report_intro(inputs)
	if (locale === "nl") return nl_social_report_intro(inputs)
	if (locale === "pl") return pl_social_report_intro(inputs)
	if (locale === "pt") return pt_social_report_intro(inputs)
	if (locale === "ru") return ru_social_report_intro(inputs)
	if (locale === "sv") return sv_social_report_intro(inputs)
	if (locale === "tr") return tr_social_report_intro(inputs)
	if (locale === "zh") return zh_social_report_intro(inputs)
	if (locale === "ja") return ja_social_report_intro(inputs)
	return en_social_report_intro(inputs)
});
