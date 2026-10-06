/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Audit_Empty_TextInputs */

const en_ranger_audit_empty_text = /** @type {(inputs: Ranger_Audit_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No moderation action has been logged yet.`)
};

const es_ranger_audit_empty_text = /** @type {(inputs: Ranger_Audit_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todavía no se ha registrado ninguna acción de moderación.`)
};

const de_ranger_audit_empty_text = /** @type {(inputs: Ranger_Audit_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Es wurde noch keine Moderationsaktion protokolliert.`)
};

const fr_ranger_audit_empty_text = /** @type {(inputs: Ranger_Audit_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucune action de modération n’a encore été consignée.`)
};

const it_ranger_audit_empty_text = /** @type {(inputs: Ranger_Audit_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non è ancora stata registrata nessuna azione di moderazione.`)
};

const nl_ranger_audit_empty_text = /** @type {(inputs: Ranger_Audit_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Er is nog geen moderatie-actie vastgelegd.`)
};

const pl_ranger_audit_empty_text = /** @type {(inputs: Ranger_Audit_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie zapisano jeszcze żadnego działania moderacyjnego.`)
};

const pt_ranger_audit_empty_text = /** @type {(inputs: Ranger_Audit_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhuma ação de moderação foi registrada ainda.`)
};

const ru_ranger_audit_empty_text = /** @type {(inputs: Ranger_Audit_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пока не записано ни одного действия модерации.`)
};

const sv_ranger_audit_empty_text = /** @type {(inputs: Ranger_Audit_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingen modereringsåtgärd har loggats ännu.`)
};

const tr_ranger_audit_empty_text = /** @type {(inputs: Ranger_Audit_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz hiçbir moderasyon işlemi kaydedilmedi.`)
};

const zh_ranger_audit_empty_text = /** @type {(inputs: Ranger_Audit_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`尚未记录任何审核操作。`)
};

const ja_ranger_audit_empty_text = /** @type {(inputs: Ranger_Audit_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`モデレーションの操作はまだ記録されていません。`)
};

/**
* | output |
* | --- |
* | "No moderation action has been logged yet." |
*
* @param {Ranger_Audit_Empty_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_audit_empty_text = /** @type {((inputs?: Ranger_Audit_Empty_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Audit_Empty_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_audit_empty_text(inputs)
	if (locale === "de") return de_ranger_audit_empty_text(inputs)
	if (locale === "fr") return fr_ranger_audit_empty_text(inputs)
	if (locale === "it") return it_ranger_audit_empty_text(inputs)
	if (locale === "nl") return nl_ranger_audit_empty_text(inputs)
	if (locale === "pl") return pl_ranger_audit_empty_text(inputs)
	if (locale === "pt") return pt_ranger_audit_empty_text(inputs)
	if (locale === "ru") return ru_ranger_audit_empty_text(inputs)
	if (locale === "sv") return sv_ranger_audit_empty_text(inputs)
	if (locale === "tr") return tr_ranger_audit_empty_text(inputs)
	if (locale === "zh") return zh_ranger_audit_empty_text(inputs)
	if (locale === "ja") return ja_ranger_audit_empty_text(inputs)
	return en_ranger_audit_empty_text(inputs)
});
