/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Schedule_Fill_ReplaceInputs */

const en_jams_editor_schedule_fill_replace = /** @type {(inputs: Jams_Editor_Schedule_Fill_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This replaces the dates you have now. Nothing is saved until you press Save.`)
};

const es_jams_editor_schedule_fill_replace = /** @type {(inputs: Jams_Editor_Schedule_Fill_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esto reemplaza las fechas actuales. No se guarda nada hasta que pulses Guardar.`)
};

const de_jams_editor_schedule_fill_replace = /** @type {(inputs: Jams_Editor_Schedule_Fill_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das ersetzt die aktuellen Termine. Erst mit „Speichern“ wird etwas gesichert.`)
};

const fr_jams_editor_schedule_fill_replace = /** @type {(inputs: Jams_Editor_Schedule_Fill_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cela remplace les dates actuelles. Rien n’est enregistré tant que vous n’avez pas cliqué sur Enregistrer.`)
};

const it_jams_editor_schedule_fill_replace = /** @type {(inputs: Jams_Editor_Schedule_Fill_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questo sostituisce le date attuali. Non viene salvato nulla finché non premi Salva.`)
};

const nl_jams_editor_schedule_fill_replace = /** @type {(inputs: Jams_Editor_Schedule_Fill_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dit vervangt de huidige data. Er wordt niets opgeslagen tot je op Opslaan drukt.`)
};

const pl_jams_editor_schedule_fill_replace = /** @type {(inputs: Jams_Editor_Schedule_Fill_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`To zastąpi obecne daty. Nic nie zostanie zapisane, dopóki nie klikniesz Zapisz.`)
};

const pt_jams_editor_schedule_fill_replace = /** @type {(inputs: Jams_Editor_Schedule_Fill_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Isso substitui as datas atuais. Nada é salvo até você clicar em Salvar.`)
};

const ru_jams_editor_schedule_fill_replace = /** @type {(inputs: Jams_Editor_Schedule_Fill_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Это заменит текущие даты. Ничего не сохранится, пока вы не нажмёте «Сохранить».`)
};

const sv_jams_editor_schedule_fill_replace = /** @type {(inputs: Jams_Editor_Schedule_Fill_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Detta ersätter nuvarande datum. Inget sparas förrän du trycker på Spara.`)
};

const tr_jams_editor_schedule_fill_replace = /** @type {(inputs: Jams_Editor_Schedule_Fill_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu, mevcut tarihlerin yerine geçer. Kaydet’e basana kadar hiçbir şey kaydedilmez.`)
};

const zh_jams_editor_schedule_fill_replace = /** @type {(inputs: Jams_Editor_Schedule_Fill_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`这会替换当前日期。点击保存之前不会保存任何内容。`)
};

const ja_jams_editor_schedule_fill_replace = /** @type {(inputs: Jams_Editor_Schedule_Fill_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`現在の日程が置き換わります。保存を押すまで何も保存されません。`)
};

/**
* | output |
* | --- |
* | "This replaces the dates you have now. Nothing is saved until you press Save." |
*
* @param {Jams_Editor_Schedule_Fill_ReplaceInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_schedule_fill_replace = /** @type {((inputs?: Jams_Editor_Schedule_Fill_ReplaceInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Schedule_Fill_ReplaceInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_schedule_fill_replace(inputs)
	if (locale === "de") return de_jams_editor_schedule_fill_replace(inputs)
	if (locale === "fr") return fr_jams_editor_schedule_fill_replace(inputs)
	if (locale === "it") return it_jams_editor_schedule_fill_replace(inputs)
	if (locale === "nl") return nl_jams_editor_schedule_fill_replace(inputs)
	if (locale === "pl") return pl_jams_editor_schedule_fill_replace(inputs)
	if (locale === "pt") return pt_jams_editor_schedule_fill_replace(inputs)
	if (locale === "ru") return ru_jams_editor_schedule_fill_replace(inputs)
	if (locale === "sv") return sv_jams_editor_schedule_fill_replace(inputs)
	if (locale === "tr") return tr_jams_editor_schedule_fill_replace(inputs)
	if (locale === "zh") return zh_jams_editor_schedule_fill_replace(inputs)
	if (locale === "ja") return ja_jams_editor_schedule_fill_replace(inputs)
	return en_jams_editor_schedule_fill_replace(inputs)
});
