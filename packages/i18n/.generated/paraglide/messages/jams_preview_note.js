/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Preview_NoteInputs */

const en_jams_preview_note = /** @type {(inputs: Jams_Preview_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How the public page looks to visitors. Unsaved changes are included.`)
};

const es_jams_preview_note = /** @type {(inputs: Jams_Preview_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Así ve la página pública quien la visita. Incluye los cambios sin guardar.`)
};

const de_jams_preview_note = /** @type {(inputs: Jams_Preview_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`So sieht die öffentliche Seite für Besucher aus. Ungespeicherte Änderungen sind enthalten.`)
};

const fr_jams_preview_note = /** @type {(inputs: Jams_Preview_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’aspect de la page publique pour les visiteurs. Les modifications non enregistrées sont incluses.`)
};

const it_jams_preview_note = /** @type {(inputs: Jams_Preview_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Come i visitatori vedono la pagina pubblica. Include le modifiche non salvate.`)
};

const nl_jams_preview_note = /** @type {(inputs: Jams_Preview_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zo ziet de openbare pagina er voor bezoekers uit. Niet-opgeslagen wijzigingen zijn inbegrepen.`)
};

const pl_jams_preview_note = /** @type {(inputs: Jams_Preview_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tak publiczna strona wygląda dla odwiedzających. Uwzględnia niezapisane zmiany.`)
};

const pt_jams_preview_note = /** @type {(inputs: Jams_Preview_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Como a página pública aparece para os visitantes. Inclui alterações não salvas.`)
};

const ru_jams_preview_note = /** @type {(inputs: Jams_Preview_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Так публичная страница выглядит для посетителей. Несохранённые изменения учтены.`)
};

const sv_jams_preview_note = /** @type {(inputs: Jams_Preview_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Så ser den offentliga sidan ut för besökare. Osparade ändringar ingår.`)
};

const tr_jams_preview_note = /** @type {(inputs: Jams_Preview_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Herkese açık sayfanın ziyaretçilere görünümü. Kaydedilmemiş değişiklikler dahildir.`)
};

const zh_jams_preview_note = /** @type {(inputs: Jams_Preview_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`访客看到的公开页面样子，包含未保存的更改。`)
};

const ja_jams_preview_note = /** @type {(inputs: Jams_Preview_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`訪問者に見える公開ページの表示です。未保存の変更も反映されます。`)
};

/**
* | output |
* | --- |
* | "How the public page looks to visitors. Unsaved changes are included." |
*
* @param {Jams_Preview_NoteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_preview_note = /** @type {((inputs?: Jams_Preview_NoteInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Preview_NoteInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_preview_note(inputs)
	if (locale === "de") return de_jams_preview_note(inputs)
	if (locale === "fr") return fr_jams_preview_note(inputs)
	if (locale === "it") return it_jams_preview_note(inputs)
	if (locale === "nl") return nl_jams_preview_note(inputs)
	if (locale === "pl") return pl_jams_preview_note(inputs)
	if (locale === "pt") return pt_jams_preview_note(inputs)
	if (locale === "ru") return ru_jams_preview_note(inputs)
	if (locale === "sv") return sv_jams_preview_note(inputs)
	if (locale === "tr") return tr_jams_preview_note(inputs)
	if (locale === "zh") return zh_jams_preview_note(inputs)
	if (locale === "ja") return ja_jams_preview_note(inputs)
	return en_jams_preview_note(inputs)
});
