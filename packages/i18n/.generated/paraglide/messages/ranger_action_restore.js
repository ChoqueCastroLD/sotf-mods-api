/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Action_RestoreInputs */

const en_ranger_action_restore = /** @type {(inputs: Ranger_Action_RestoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Restore`)
};

const es_ranger_action_restore = /** @type {(inputs: Ranger_Action_RestoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Restaurar`)
};

const de_ranger_action_restore = /** @type {(inputs: Ranger_Action_RestoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wiederherstellen`)
};

const fr_ranger_action_restore = /** @type {(inputs: Ranger_Action_RestoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Restaurer`)
};

const it_ranger_action_restore = /** @type {(inputs: Ranger_Action_RestoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ripristina`)
};

const nl_ranger_action_restore = /** @type {(inputs: Ranger_Action_RestoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Herstellen`)
};

const pl_ranger_action_restore = /** @type {(inputs: Ranger_Action_RestoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przywróć`)
};

const pt_ranger_action_restore = /** @type {(inputs: Ranger_Action_RestoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Restaurar`)
};

const ru_ranger_action_restore = /** @type {(inputs: Ranger_Action_RestoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Восстановить`)
};

const sv_ranger_action_restore = /** @type {(inputs: Ranger_Action_RestoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Återställ`)
};

const tr_ranger_action_restore = /** @type {(inputs: Ranger_Action_RestoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geri yükle`)
};

const zh_ranger_action_restore = /** @type {(inputs: Ranger_Action_RestoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`恢复`)
};

const ja_ranger_action_restore = /** @type {(inputs: Ranger_Action_RestoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`復元`)
};

/**
* | output |
* | --- |
* | "Restore" |
*
* @param {Ranger_Action_RestoreInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_action_restore = /** @type {((inputs?: Ranger_Action_RestoreInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Action_RestoreInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_action_restore(inputs)
	if (locale === "de") return de_ranger_action_restore(inputs)
	if (locale === "fr") return fr_ranger_action_restore(inputs)
	if (locale === "it") return it_ranger_action_restore(inputs)
	if (locale === "nl") return nl_ranger_action_restore(inputs)
	if (locale === "pl") return pl_ranger_action_restore(inputs)
	if (locale === "pt") return pt_ranger_action_restore(inputs)
	if (locale === "ru") return ru_ranger_action_restore(inputs)
	if (locale === "sv") return sv_ranger_action_restore(inputs)
	if (locale === "tr") return tr_ranger_action_restore(inputs)
	if (locale === "zh") return zh_ranger_action_restore(inputs)
	if (locale === "ja") return ja_ranger_action_restore(inputs)
	return en_ranger_action_restore(inputs)
});
