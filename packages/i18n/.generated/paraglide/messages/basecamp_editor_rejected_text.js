/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Editor_Rejected_TextInputs */

const en_basecamp_editor_rejected_text = /** @type {(inputs: Basecamp_Editor_Rejected_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderators asked for changes. Fix the listing and resubmit it from the Status tab.`)
};

const es_basecamp_editor_rejected_text = /** @type {(inputs: Basecamp_Editor_Rejected_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los moderadores pidieron cambios. Corrige la ficha y reenvíala desde la pestaña Estado.`)
};

const de_basecamp_editor_rejected_text = /** @type {(inputs: Basecamp_Editor_Rejected_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Moderatoren haben Änderungen erbeten. Korrigiere die Seite und reiche sie im Tab Status erneut ein.`)
};

const fr_basecamp_editor_rejected_text = /** @type {(inputs: Basecamp_Editor_Rejected_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les modérateurs ont demandé des modifications. Corrigez la fiche et renvoyez-la depuis l’onglet État.`)
};

const it_basecamp_editor_rejected_text = /** @type {(inputs: Basecamp_Editor_Rejected_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I moderatori hanno chiesto modifiche. Correggi la scheda e rinviala dalla scheda Stato.`)
};

const nl_basecamp_editor_rejected_text = /** @type {(inputs: Basecamp_Editor_Rejected_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De moderators vroegen om wijzigingen. Pas de pagina aan en stuur hem opnieuw in via het tabblad Status.`)
};

const pl_basecamp_editor_rejected_text = /** @type {(inputs: Basecamp_Editor_Rejected_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderatorzy poprosili o zmiany. Popraw stronę i wyślij ją ponownie z karty Stan.`)
};

const pt_basecamp_editor_rejected_text = /** @type {(inputs: Basecamp_Editor_Rejected_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Os moderadores pediram alterações. Corrija a página e reenvie pela aba Estado.`)
};

const ru_basecamp_editor_rejected_text = /** @type {(inputs: Basecamp_Editor_Rejected_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Модераторы попросили внести изменения. Исправьте страницу и отправьте её снова на вкладке «Статус».`)
};

const sv_basecamp_editor_rejected_text = /** @type {(inputs: Basecamp_Editor_Rejected_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderatorerna har begärt ändringar. Rätta sidan och skicka in den igen under fliken Status.`)
};

const tr_basecamp_editor_rejected_text = /** @type {(inputs: Basecamp_Editor_Rejected_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderatörler değişiklik istedi. Sayfayı düzelt ve Durum sekmesinden yeniden gönder.`)
};

const zh_basecamp_editor_rejected_text = /** @type {(inputs: Basecamp_Editor_Rejected_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`版主要求修改。请修正页面，然后在“状态”标签中重新提交。`)
};

const ja_basecamp_editor_rejected_text = /** @type {(inputs: Basecamp_Editor_Rejected_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`モデレーターから修正の依頼がありました。ページを直して「状態」タブから再提出してください。`)
};

/**
* | output |
* | --- |
* | "Moderators asked for changes. Fix the listing and resubmit it from the Status tab." |
*
* @param {Basecamp_Editor_Rejected_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_editor_rejected_text = /** @type {((inputs?: Basecamp_Editor_Rejected_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Editor_Rejected_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_editor_rejected_text(inputs)
	if (locale === "de") return de_basecamp_editor_rejected_text(inputs)
	if (locale === "fr") return fr_basecamp_editor_rejected_text(inputs)
	if (locale === "it") return it_basecamp_editor_rejected_text(inputs)
	if (locale === "nl") return nl_basecamp_editor_rejected_text(inputs)
	if (locale === "pl") return pl_basecamp_editor_rejected_text(inputs)
	if (locale === "pt") return pt_basecamp_editor_rejected_text(inputs)
	if (locale === "ru") return ru_basecamp_editor_rejected_text(inputs)
	if (locale === "sv") return sv_basecamp_editor_rejected_text(inputs)
	if (locale === "tr") return tr_basecamp_editor_rejected_text(inputs)
	if (locale === "zh") return zh_basecamp_editor_rejected_text(inputs)
	if (locale === "ja") return ja_basecamp_editor_rejected_text(inputs)
	return en_basecamp_editor_rejected_text(inputs)
});
