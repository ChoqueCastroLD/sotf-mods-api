/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Phase_DescriptionInputs */

const en_jams_editor_phase_description = /** @type {(inputs: Jams_Editor_Phase_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Phases advance on their own following the schedule. Force a phase only to fix or accelerate things.`)
};

const es_jams_editor_phase_description = /** @type {(inputs: Jams_Editor_Phase_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Las fases avanzan solas según el calendario. Fuerza una fase solo para corregir o acelerar.`)
};

const de_jams_editor_phase_description = /** @type {(inputs: Jams_Editor_Phase_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Phasen wechseln automatisch nach dem Zeitplan. Erzwinge eine Phase nur, um etwas zu korrigieren oder zu beschleunigen.`)
};

const fr_jams_editor_phase_description = /** @type {(inputs: Jams_Editor_Phase_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les phases avancent seules selon le calendrier. Ne forcez une phase que pour corriger ou accélérer.`)
};

const it_jams_editor_phase_description = /** @type {(inputs: Jams_Editor_Phase_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le fasi avanzano da sole secondo il calendario. Forza una fase solo per correggere o accelerare.`)
};

const nl_jams_editor_phase_description = /** @type {(inputs: Jams_Editor_Phase_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fases gaan automatisch verder volgens de planning. Forceer een fase alleen om iets te herstellen of te versnellen.`)
};

const pl_jams_editor_phase_description = /** @type {(inputs: Jams_Editor_Phase_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fazy zmieniają się automatycznie według harmonogramu. Wymuszaj fazę tylko, by coś naprawić lub przyspieszyć.`)
};

const pt_jams_editor_phase_description = /** @type {(inputs: Jams_Editor_Phase_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`As fases avançam sozinhas conforme o cronograma. Force uma fase apenas para corrigir ou acelerar.`)
};

const ru_jams_editor_phase_description = /** @type {(inputs: Jams_Editor_Phase_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Фазы переключаются сами по расписанию. Принудительно меняйте фазу только для исправления или ускорения.`)
};

const sv_jams_editor_phase_description = /** @type {(inputs: Jams_Editor_Phase_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Faserna går vidare av sig själva enligt schemat. Tvinga en fas bara för att rätta till eller skynda på.`)
};

const tr_jams_editor_phase_description = /** @type {(inputs: Jams_Editor_Phase_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aşamalar takvime göre kendiliğinden ilerler. Bir aşamayı yalnızca düzeltmek veya hızlandırmak için zorlayın.`)
};

const zh_jams_editor_phase_description = /** @type {(inputs: Jams_Editor_Phase_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`各阶段会按日程自动推进。仅在需要修正或提前时才强制切换阶段。`)
};

const ja_jams_editor_phase_description = /** @type {(inputs: Jams_Editor_Phase_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フェーズはスケジュールに従って自動で進みます。修正や前倒しが必要なときだけ強制してください。`)
};

/**
* | output |
* | --- |
* | "Phases advance on their own following the schedule. Force a phase only to fix or accelerate things." |
*
* @param {Jams_Editor_Phase_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_phase_description = /** @type {((inputs?: Jams_Editor_Phase_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Phase_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_phase_description(inputs)
	if (locale === "de") return de_jams_editor_phase_description(inputs)
	if (locale === "fr") return fr_jams_editor_phase_description(inputs)
	if (locale === "it") return it_jams_editor_phase_description(inputs)
	if (locale === "nl") return nl_jams_editor_phase_description(inputs)
	if (locale === "pl") return pl_jams_editor_phase_description(inputs)
	if (locale === "pt") return pt_jams_editor_phase_description(inputs)
	if (locale === "ru") return ru_jams_editor_phase_description(inputs)
	if (locale === "sv") return sv_jams_editor_phase_description(inputs)
	if (locale === "tr") return tr_jams_editor_phase_description(inputs)
	if (locale === "zh") return zh_jams_editor_phase_description(inputs)
	if (locale === "ja") return ja_jams_editor_phase_description(inputs)
	return en_jams_editor_phase_description(inputs)
});
