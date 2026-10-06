/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Triage_NoteInputs */

const en_ranger_triage_note = /** @type {(inputs: Ranger_Triage_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Phone view: quick review only. The file and manifest diffs need a tablet or a desktop.`)
};

const es_ranger_triage_note = /** @type {(inputs: Ranger_Triage_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vista de móvil: solo revisión rápida. Los diffs de archivos y del manifest necesitan una tablet o un ordenador.`)
};

const de_ranger_triage_note = /** @type {(inputs: Ranger_Triage_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Handyansicht: nur schnelle Prüfung. Datei- und Manifest-Diffs brauchen ein Tablet oder einen Computer.`)
};

const fr_ranger_triage_note = /** @type {(inputs: Ranger_Triage_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vue mobile : examen rapide uniquement. Les diffs de fichiers et de manifest demandent une tablette ou un ordinateur.`)
};

const it_ranger_triage_note = /** @type {(inputs: Ranger_Triage_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vista da telefono: solo revisione rapida. Le differenze di file e manifest richiedono un tablet o un computer.`)
};

const nl_ranger_triage_note = /** @type {(inputs: Ranger_Triage_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Telefoonweergave: alleen snelle beoordeling. De bestands- en manifestverschillen vragen een tablet of computer.`)
};

const pl_ranger_triage_note = /** @type {(inputs: Ranger_Triage_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Widok telefonu: tylko szybki przegląd. Różnice plików i manifestu wymagają tabletu lub komputera.`)
};

const pt_ranger_triage_note = /** @type {(inputs: Ranger_Triage_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visão de celular: só revisão rápida. As diferenças de arquivos e do manifest precisam de um tablet ou computador.`)
};

const ru_ranger_triage_note = /** @type {(inputs: Ranger_Triage_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вид для телефона: только быстрый просмотр. Для сравнения файлов и манифеста нужен планшет или компьютер.`)
};

const sv_ranger_triage_note = /** @type {(inputs: Ranger_Triage_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mobilvy: bara snabb granskning. Fil- och manifestskillnaderna kräver en surfplatta eller dator.`)
};

const tr_ranger_triage_note = /** @type {(inputs: Ranger_Triage_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Telefon görünümü: yalnızca hızlı inceleme. Dosya ve manifest farkları için tablet veya bilgisayar gerekir.`)
};

const zh_ranger_triage_note = /** @type {(inputs: Ranger_Triage_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`手机视图：仅可快速查看。文件和清单差异需要平板或电脑。`)
};

const ja_ranger_triage_note = /** @type {(inputs: Ranger_Triage_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`スマートフォン表示：簡易確認のみ。ファイルとマニフェストの差分はタブレットかパソコンで確認してください。`)
};

/**
* | output |
* | --- |
* | "Phone view: quick review only. The file and manifest diffs need a tablet or a desktop." |
*
* @param {Ranger_Triage_NoteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_triage_note = /** @type {((inputs?: Ranger_Triage_NoteInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Triage_NoteInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_triage_note(inputs)
	if (locale === "de") return de_ranger_triage_note(inputs)
	if (locale === "fr") return fr_ranger_triage_note(inputs)
	if (locale === "it") return it_ranger_triage_note(inputs)
	if (locale === "nl") return nl_ranger_triage_note(inputs)
	if (locale === "pl") return pl_ranger_triage_note(inputs)
	if (locale === "pt") return pt_ranger_triage_note(inputs)
	if (locale === "ru") return ru_ranger_triage_note(inputs)
	if (locale === "sv") return sv_ranger_triage_note(inputs)
	if (locale === "tr") return tr_ranger_triage_note(inputs)
	if (locale === "zh") return zh_ranger_triage_note(inputs)
	if (locale === "ja") return ja_ranger_triage_note(inputs)
	return en_ranger_triage_note(inputs)
});
