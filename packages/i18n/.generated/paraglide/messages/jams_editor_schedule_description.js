/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Schedule_DescriptionInputs */

const en_jams_editor_schedule_description = /** @type {(inputs: Jams_Editor_Schedule_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Times are in your browser's time zone and shown to everyone in UTC. Phases advance automatically at each moment.`)
};

const es_jams_editor_schedule_description = /** @type {(inputs: Jams_Editor_Schedule_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Las horas usan la zona horaria de tu navegador y se muestran a todos en UTC. Las fases avanzan solas en cada momento.`)
};

const de_jams_editor_schedule_description = /** @type {(inputs: Jams_Editor_Schedule_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Zeiten gelten in der Zeitzone deines Browsers und werden allen in UTC angezeigt. Die Phasen wechseln automatisch zu jedem Zeitpunkt.`)
};

const fr_jams_editor_schedule_description = /** @type {(inputs: Jams_Editor_Schedule_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les heures suivent le fuseau de votre navigateur et sont affichées en UTC pour tous. Les phases avancent automatiquement à chaque échéance.`)
};

const it_jams_editor_schedule_description = /** @type {(inputs: Jams_Editor_Schedule_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gli orari seguono il fuso del tuo browser e sono mostrati a tutti in UTC. Le fasi avanzano automaticamente a ogni scadenza.`)
};

const nl_jams_editor_schedule_description = /** @type {(inputs: Jams_Editor_Schedule_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tijden gebruiken de tijdzone van je browser en worden aan iedereen in UTC getoond. Fases gaan automatisch verder op elk moment.`)
};

const pl_jams_editor_schedule_description = /** @type {(inputs: Jams_Editor_Schedule_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Godziny wg strefy czasowej przeglądarki; wszystkim wyświetlane są w UTC. Fazy zmieniają się automatycznie w każdym z terminów.`)
};

const pt_jams_editor_schedule_description = /** @type {(inputs: Jams_Editor_Schedule_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Os horários usam o fuso do seu navegador e são exibidos a todos em UTC. As fases avançam sozinhas a cada momento.`)
};

const ru_jams_editor_schedule_description = /** @type {(inputs: Jams_Editor_Schedule_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Время задаётся в часовом поясе браузера, а всем показывается в UTC. Фазы переключаются автоматически в каждый из моментов.`)
};

const sv_jams_editor_schedule_description = /** @type {(inputs: Jams_Editor_Schedule_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tiderna anges i webbläsarens tidszon och visas för alla i UTC. Faserna går vidare automatiskt vid varje tidpunkt.`)
};

const tr_jams_editor_schedule_description = /** @type {(inputs: Jams_Editor_Schedule_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saatler tarayıcınızın saat dilimindedir ve herkese UTC olarak gösterilir. Aşamalar her anda otomatik ilerler.`)
};

const zh_jams_editor_schedule_description = /** @type {(inputs: Jams_Editor_Schedule_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`时间使用浏览器所在时区，对所有人以 UTC 显示。各阶段会在对应时间自动推进。`)
};

const ja_jams_editor_schedule_description = /** @type {(inputs: Jams_Editor_Schedule_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`時刻はブラウザのタイムゾーンで入力し、全員にUTCで表示されます。フェーズは各時刻に自動で進みます。`)
};

/**
* | output |
* | --- |
* | "Times are in your browser's time zone and shown to everyone in UTC. Phases advance automatically at each moment." |
*
* @param {Jams_Editor_Schedule_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_schedule_description = /** @type {((inputs?: Jams_Editor_Schedule_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Schedule_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_schedule_description(inputs)
	if (locale === "de") return de_jams_editor_schedule_description(inputs)
	if (locale === "fr") return fr_jams_editor_schedule_description(inputs)
	if (locale === "it") return it_jams_editor_schedule_description(inputs)
	if (locale === "nl") return nl_jams_editor_schedule_description(inputs)
	if (locale === "pl") return pl_jams_editor_schedule_description(inputs)
	if (locale === "pt") return pt_jams_editor_schedule_description(inputs)
	if (locale === "ru") return ru_jams_editor_schedule_description(inputs)
	if (locale === "sv") return sv_jams_editor_schedule_description(inputs)
	if (locale === "tr") return tr_jams_editor_schedule_description(inputs)
	if (locale === "zh") return zh_jams_editor_schedule_description(inputs)
	if (locale === "ja") return ja_jams_editor_schedule_description(inputs)
	return en_jams_editor_schedule_description(inputs)
});
