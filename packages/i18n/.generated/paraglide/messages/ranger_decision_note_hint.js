/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Decision_Note_HintInputs */

const en_ranger_decision_note_hint = /** @type {(inputs: Ranger_Decision_Note_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown. Sent with the template; say what to fix.`)
};

const es_ranger_decision_note_hint = /** @type {(inputs: Ranger_Decision_Note_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown. Se envía con la plantilla; di qué hay que corregir.`)
};

const de_ranger_decision_note_hint = /** @type {(inputs: Ranger_Decision_Note_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown. Wird mit der Vorlage gesendet; sag, was zu beheben ist.`)
};

const fr_ranger_decision_note_hint = /** @type {(inputs: Ranger_Decision_Note_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown. Envoyée avec le modèle ; dites quoi corriger.`)
};

const it_ranger_decision_note_hint = /** @type {(inputs: Ranger_Decision_Note_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown. Inviata insieme al modello; spiega cosa correggere.`)
};

const nl_ranger_decision_note_hint = /** @type {(inputs: Ranger_Decision_Note_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown. Wordt met het sjabloon verstuurd; zeg wat er moet worden opgelost.`)
};

const pl_ranger_decision_note_hint = /** @type {(inputs: Ranger_Decision_Note_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown. Wysyłana z szablonem; napisz, co poprawić.`)
};

const pt_ranger_decision_note_hint = /** @type {(inputs: Ranger_Decision_Note_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown. Vai junto com o modelo; diga o que corrigir.`)
};

const ru_ranger_decision_note_hint = /** @type {(inputs: Ranger_Decision_Note_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown. Отправляется вместе с шаблоном; напишите, что исправить.`)
};

const sv_ranger_decision_note_hint = /** @type {(inputs: Ranger_Decision_Note_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown. Skickas med mallen; säg vad som ska rättas.`)
};

const tr_ranger_decision_note_hint = /** @type {(inputs: Ranger_Decision_Note_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown. Şablonla birlikte gönderilir; neyin düzeltileceğini yazın.`)
};

const zh_ranger_decision_note_hint = /** @type {(inputs: Ranger_Decision_Note_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`支持 Markdown。与模板一起发送；说明需要修改什么。`)
};

const ja_ranger_decision_note_hint = /** @type {(inputs: Ranger_Decision_Note_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown 対応。テンプレートと一緒に送信されます。何を直すべきか書いてください。`)
};

/**
* | output |
* | --- |
* | "Markdown. Sent with the template; say what to fix." |
*
* @param {Ranger_Decision_Note_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_decision_note_hint = /** @type {((inputs?: Ranger_Decision_Note_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Decision_Note_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_decision_note_hint(inputs)
	if (locale === "de") return de_ranger_decision_note_hint(inputs)
	if (locale === "fr") return fr_ranger_decision_note_hint(inputs)
	if (locale === "it") return it_ranger_decision_note_hint(inputs)
	if (locale === "nl") return nl_ranger_decision_note_hint(inputs)
	if (locale === "pl") return pl_ranger_decision_note_hint(inputs)
	if (locale === "pt") return pt_ranger_decision_note_hint(inputs)
	if (locale === "ru") return ru_ranger_decision_note_hint(inputs)
	if (locale === "sv") return sv_ranger_decision_note_hint(inputs)
	if (locale === "tr") return tr_ranger_decision_note_hint(inputs)
	if (locale === "zh") return zh_ranger_decision_note_hint(inputs)
	if (locale === "ja") return ja_ranger_decision_note_hint(inputs)
	return en_ranger_decision_note_hint(inputs)
});
