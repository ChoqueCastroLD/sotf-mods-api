/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Error_NumbersInputs */

const en_jams_editor_error_numbers = /** @type {(inputs: Jams_Editor_Error_NumbersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Check the numbers: entries 1 to 5, co-authors 0 to 10, age 0 to 365, activity 0 to 100 and votes 1 to 1000.`)
};

const es_jams_editor_error_numbers = /** @type {(inputs: Jams_Editor_Error_NumbersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revisa los números: participaciones 1 a 5, coautores 0 a 10, antigüedad 0 a 365, actividad 0 a 100 y votos 1 a 1000.`)
};

const de_jams_editor_error_numbers = /** @type {(inputs: Jams_Editor_Error_NumbersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prüfe die Zahlen: Beiträge 1 bis 5, Co-Autoren 0 bis 10, Alter 0 bis 365, Aktivität 0 bis 100 und Stimmen 1 bis 1000.`)
};

const fr_jams_editor_error_numbers = /** @type {(inputs: Jams_Editor_Error_NumbersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vérifiez les nombres : participations 1 à 5, coauteurs 0 à 10, ancienneté 0 à 365, activité 0 à 100 et votes 1 à 1000.`)
};

const it_jams_editor_error_numbers = /** @type {(inputs: Jams_Editor_Error_NumbersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Controlla i numeri: iscrizioni 1-5, coautori 0-10, anzianità 0-365, attività 0-100 e voti 1-1000.`)
};

const nl_jams_editor_error_numbers = /** @type {(inputs: Jams_Editor_Error_NumbersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Controleer de getallen: inzendingen 1 tot 5, co-auteurs 0 tot 10, leeftijd 0 tot 365, activiteit 0 tot 100 en stemmen 1 tot 1000.`)
};

const pl_jams_editor_error_numbers = /** @type {(inputs: Jams_Editor_Error_NumbersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sprawdź liczby: zgłoszenia 1–5, współautorzy 0–10, wiek 0–365, aktywność 0–100 i głosy 1–1000.`)
};

const pt_jams_editor_error_numbers = /** @type {(inputs: Jams_Editor_Error_NumbersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confira os números: inscrições 1 a 5, coautores 0 a 10, idade 0 a 365, atividade 0 a 100 e votos 1 a 1000.`)
};

const ru_jams_editor_error_numbers = /** @type {(inputs: Jams_Editor_Error_NumbersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Проверьте числа: работ 1–5, соавторов 0–10, возраст 0–365, активность 0–100, голосов 1–1000.`)
};

const sv_jams_editor_error_numbers = /** @type {(inputs: Jams_Editor_Error_NumbersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kontrollera talen: bidrag 1–5, medförfattare 0–10, ålder 0–365, aktivitet 0–100 och röster 1–1000.`)
};

const tr_jams_editor_error_numbers = /** @type {(inputs: Jams_Editor_Error_NumbersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sayıları kontrol edin: başvuru 1-5, ortak yapımcı 0-10, yaş 0-365, etkinlik 0-100 ve oy 1-1000.`)
};

const zh_jams_editor_error_numbers = /** @type {(inputs: Jams_Editor_Error_NumbersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请检查数值：作品数 1–5、合作者 0–10、账号天数 0–365、活跃度 0–100、票数 1–1000。`)
};

const ja_jams_editor_error_numbers = /** @type {(inputs: Jams_Editor_Error_NumbersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`数値を確認してください：応募数 1〜5、共同制作者 0〜10、日数 0〜365、活動量 0〜100、票数 1〜1000。`)
};

/**
* | output |
* | --- |
* | "Check the numbers: entries 1 to 5, co-authors 0 to 10, age 0 to 365, activity 0 to 100 and votes 1 to 1000." |
*
* @param {Jams_Editor_Error_NumbersInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_error_numbers = /** @type {((inputs?: Jams_Editor_Error_NumbersInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Error_NumbersInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_error_numbers(inputs)
	if (locale === "de") return de_jams_editor_error_numbers(inputs)
	if (locale === "fr") return fr_jams_editor_error_numbers(inputs)
	if (locale === "it") return it_jams_editor_error_numbers(inputs)
	if (locale === "nl") return nl_jams_editor_error_numbers(inputs)
	if (locale === "pl") return pl_jams_editor_error_numbers(inputs)
	if (locale === "pt") return pt_jams_editor_error_numbers(inputs)
	if (locale === "ru") return ru_jams_editor_error_numbers(inputs)
	if (locale === "sv") return sv_jams_editor_error_numbers(inputs)
	if (locale === "tr") return tr_jams_editor_error_numbers(inputs)
	if (locale === "zh") return zh_jams_editor_error_numbers(inputs)
	if (locale === "ja") return ja_jams_editor_error_numbers(inputs)
	return en_jams_editor_error_numbers(inputs)
});
