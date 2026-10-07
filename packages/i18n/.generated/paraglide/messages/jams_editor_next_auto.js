/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ phase: NonNullable<unknown>, date: NonNullable<unknown>, relative: NonNullable<unknown> }} Jams_Editor_Next_AutoInputs */

const en_jams_editor_next_auto = /** @type {(inputs: Jams_Editor_Next_AutoInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Next on the schedule: ${i?.phase} on ${i?.date} (${i?.relative}).`)
};

const es_jams_editor_next_auto = /** @type {(inputs: Jams_Editor_Next_AutoInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Lo siguiente en el calendario: ${i?.phase} el ${i?.date} (${i?.relative}).`)
};

const de_jams_editor_next_auto = /** @type {(inputs: Jams_Editor_Next_AutoInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Als Nächstes laut Zeitplan: ${i?.phase} am ${i?.date} (${i?.relative}).`)
};

const fr_jams_editor_next_auto = /** @type {(inputs: Jams_Editor_Next_AutoInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Prochaine étape du calendrier : ${i?.phase} le ${i?.date} (${i?.relative}).`)
};

const it_jams_editor_next_auto = /** @type {(inputs: Jams_Editor_Next_AutoInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Prossimo passo del calendario: ${i?.phase} il ${i?.date} (${i?.relative}).`)
};

const nl_jams_editor_next_auto = /** @type {(inputs: Jams_Editor_Next_AutoInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Hierna volgens het schema: ${i?.phase} op ${i?.date} (${i?.relative}).`)
};

const pl_jams_editor_next_auto = /** @type {(inputs: Jams_Editor_Next_AutoInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Następny punkt harmonogramu: ${i?.phase}, ${i?.date} (${i?.relative}).`)
};

const pt_jams_editor_next_auto = /** @type {(inputs: Jams_Editor_Next_AutoInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Próximo no cronograma: ${i?.phase} em ${i?.date} (${i?.relative}).`)
};

const ru_jams_editor_next_auto = /** @type {(inputs: Jams_Editor_Next_AutoInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Следующее по расписанию: ${i?.phase}, ${i?.date} (${i?.relative}).`)
};

const sv_jams_editor_next_auto = /** @type {(inputs: Jams_Editor_Next_AutoInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nästa i schemat: ${i?.phase} den ${i?.date} (${i?.relative}).`)
};

const tr_jams_editor_next_auto = /** @type {(inputs: Jams_Editor_Next_AutoInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Programdaki sıradaki adım: ${i?.phase}, ${i?.date} (${i?.relative}).`)
};

const zh_jams_editor_next_auto = /** @type {(inputs: Jams_Editor_Next_AutoInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`日程中的下一步：${i?.date} 进入“${i?.phase}”（${i?.relative}）。`)
};

const ja_jams_editor_next_auto = /** @type {(inputs: Jams_Editor_Next_AutoInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`次の予定: ${i?.date} に「${i?.phase}」（${i?.relative}）。`)
};

/**
* | output |
* | --- |
* | "Next on the schedule: {phase} on {date} ({relative})." |
*
* @param {Jams_Editor_Next_AutoInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_next_auto = /** @type {((inputs: Jams_Editor_Next_AutoInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Next_AutoInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_next_auto(inputs)
	if (locale === "de") return de_jams_editor_next_auto(inputs)
	if (locale === "fr") return fr_jams_editor_next_auto(inputs)
	if (locale === "it") return it_jams_editor_next_auto(inputs)
	if (locale === "nl") return nl_jams_editor_next_auto(inputs)
	if (locale === "pl") return pl_jams_editor_next_auto(inputs)
	if (locale === "pt") return pt_jams_editor_next_auto(inputs)
	if (locale === "ru") return ru_jams_editor_next_auto(inputs)
	if (locale === "sv") return sv_jams_editor_next_auto(inputs)
	if (locale === "tr") return tr_jams_editor_next_auto(inputs)
	if (locale === "zh") return zh_jams_editor_next_auto(inputs)
	if (locale === "ja") return ja_jams_editor_next_auto(inputs)
	return en_jams_editor_next_auto(inputs)
});
