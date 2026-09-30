/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Locked_TextInputs */

const en_jams_editor_locked_text = /** @type {(inputs: Jams_Editor_Locked_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The phase was forced by hand, so the schedule no longer moves it. Resume the schedule to hand control back.`)
};

const es_jams_editor_locked_text = /** @type {(inputs: Jams_Editor_Locked_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La fase se forzó a mano, así que el calendario ya no la mueve. Reanuda el calendario para devolver el control.`)
};

const de_jams_editor_locked_text = /** @type {(inputs: Jams_Editor_Locked_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Phase wurde manuell erzwungen, daher ändert der Zeitplan sie nicht mehr. Setze den Zeitplan fort, um die Kontrolle zurückzugeben.`)
};

const fr_jams_editor_locked_text = /** @type {(inputs: Jams_Editor_Locked_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La phase a été forcée à la main, le calendrier ne la modifie donc plus. Reprenez le calendrier pour lui rendre la main.`)
};

const it_jams_editor_locked_text = /** @type {(inputs: Jams_Editor_Locked_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La fase è stata forzata a mano, quindi il calendario non la sposta più. Riprendi il calendario per restituire il controllo.`)
};

const nl_jams_editor_locked_text = /** @type {(inputs: Jams_Editor_Locked_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De fase is handmatig geforceerd, dus de planning verandert hem niet meer. Hervat de planning om de controle terug te geven.`)
};

const pl_jams_editor_locked_text = /** @type {(inputs: Jams_Editor_Locked_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fazę wymuszono ręcznie, więc harmonogram już jej nie zmienia. Wznów harmonogram, aby oddać mu kontrolę.`)
};

const pt_jams_editor_locked_text = /** @type {(inputs: Jams_Editor_Locked_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A fase foi forçada manualmente, então o cronograma não a move mais. Retome o cronograma para devolver o controle.`)
};

const ru_jams_editor_locked_text = /** @type {(inputs: Jams_Editor_Locked_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Фаза изменена вручную, поэтому расписание её больше не переключает. Возобновите расписание, чтобы вернуть ему управление.`)
};

const sv_jams_editor_locked_text = /** @type {(inputs: Jams_Editor_Locked_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fasen tvingades fram manuellt, så schemat flyttar den inte längre. Återuppta schemat för att lämna tillbaka kontrollen.`)
};

const tr_jams_editor_locked_text = /** @type {(inputs: Jams_Editor_Locked_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aşama elle zorlandığı için takvim artık onu değiştirmiyor. Kontrolü geri vermek için takvimi sürdürün.`)
};

const zh_jams_editor_locked_text = /** @type {(inputs: Jams_Editor_Locked_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`当前阶段由手动强制设定，日程不再自动切换。恢复日程即可交还控制。`)
};

const ja_jams_editor_locked_text = /** @type {(inputs: Jams_Editor_Locked_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フェーズが手動で強制されたため、スケジュールによる切り替えは止まっています。スケジュールを再開すると自動に戻ります。`)
};

/**
* | output |
* | --- |
* | "The phase was forced by hand, so the schedule no longer moves it. Resume the schedule to hand control back." |
*
* @param {Jams_Editor_Locked_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_locked_text = /** @type {((inputs?: Jams_Editor_Locked_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Locked_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_locked_text(inputs)
	if (locale === "de") return de_jams_editor_locked_text(inputs)
	if (locale === "fr") return fr_jams_editor_locked_text(inputs)
	if (locale === "it") return it_jams_editor_locked_text(inputs)
	if (locale === "nl") return nl_jams_editor_locked_text(inputs)
	if (locale === "pl") return pl_jams_editor_locked_text(inputs)
	if (locale === "pt") return pt_jams_editor_locked_text(inputs)
	if (locale === "ru") return ru_jams_editor_locked_text(inputs)
	if (locale === "sv") return sv_jams_editor_locked_text(inputs)
	if (locale === "tr") return tr_jams_editor_locked_text(inputs)
	if (locale === "zh") return zh_jams_editor_locked_text(inputs)
	if (locale === "ja") return ja_jams_editor_locked_text(inputs)
	return en_jams_editor_locked_text(inputs)
});
