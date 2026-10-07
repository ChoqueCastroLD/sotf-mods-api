/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Schedule_FilledInputs */

const en_jams_editor_schedule_filled = /** @type {(inputs: Jams_Editor_Schedule_FilledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schedule filled in. Review it, then save.`)
};

const es_jams_editor_schedule_filled = /** @type {(inputs: Jams_Editor_Schedule_FilledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Calendario rellenado. Revísalo y guarda.`)
};

const de_jams_editor_schedule_filled = /** @type {(inputs: Jams_Editor_Schedule_FilledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zeitplan eingetragen. Prüfe ihn und speichere.`)
};

const fr_jams_editor_schedule_filled = /** @type {(inputs: Jams_Editor_Schedule_FilledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Calendrier rempli. Vérifiez-le, puis enregistrez.`)
};

const it_jams_editor_schedule_filled = /** @type {(inputs: Jams_Editor_Schedule_FilledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Calendario compilato. Controllalo e salva.`)
};

const nl_jams_editor_schedule_filled = /** @type {(inputs: Jams_Editor_Schedule_FilledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schema ingevuld. Controleer het en sla op.`)
};

const pl_jams_editor_schedule_filled = /** @type {(inputs: Jams_Editor_Schedule_FilledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Harmonogram wstawiony. Sprawdź go i zapisz.`)
};

const pt_jams_editor_schedule_filled = /** @type {(inputs: Jams_Editor_Schedule_FilledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cronograma preenchido. Revise e salve.`)
};

const ru_jams_editor_schedule_filled = /** @type {(inputs: Jams_Editor_Schedule_FilledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Расписание заполнено. Проверьте и сохраните.`)
};

const sv_jams_editor_schedule_filled = /** @type {(inputs: Jams_Editor_Schedule_FilledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schemat är ifyllt. Granska det och spara.`)
};

const tr_jams_editor_schedule_filled = /** @type {(inputs: Jams_Editor_Schedule_FilledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Program dolduruldu. Gözden geçirip kaydedin.`)
};

const zh_jams_editor_schedule_filled = /** @type {(inputs: Jams_Editor_Schedule_FilledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`日程已填入，请检查后保存。`)
};

const ja_jams_editor_schedule_filled = /** @type {(inputs: Jams_Editor_Schedule_FilledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`日程を入力しました。内容を確認して保存してください。`)
};

/**
* | output |
* | --- |
* | "Schedule filled in. Review it, then save." |
*
* @param {Jams_Editor_Schedule_FilledInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_schedule_filled = /** @type {((inputs?: Jams_Editor_Schedule_FilledInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Schedule_FilledInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_schedule_filled(inputs)
	if (locale === "de") return de_jams_editor_schedule_filled(inputs)
	if (locale === "fr") return fr_jams_editor_schedule_filled(inputs)
	if (locale === "it") return it_jams_editor_schedule_filled(inputs)
	if (locale === "nl") return nl_jams_editor_schedule_filled(inputs)
	if (locale === "pl") return pl_jams_editor_schedule_filled(inputs)
	if (locale === "pt") return pt_jams_editor_schedule_filled(inputs)
	if (locale === "ru") return ru_jams_editor_schedule_filled(inputs)
	if (locale === "sv") return sv_jams_editor_schedule_filled(inputs)
	if (locale === "tr") return tr_jams_editor_schedule_filled(inputs)
	if (locale === "zh") return zh_jams_editor_schedule_filled(inputs)
	if (locale === "ja") return ja_jams_editor_schedule_filled(inputs)
	return en_jams_editor_schedule_filled(inputs)
});
