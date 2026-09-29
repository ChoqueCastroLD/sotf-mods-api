/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Safe_To_RemoveInputs */

const en_common_safe_to_remove = /** @type {(inputs: Common_Safe_To_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Safe to remove mid-save`)
};

const es_common_safe_to_remove = /** @type {(inputs: Common_Safe_To_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se puede quitar sin romper la partida`)
};

const de_common_safe_to_remove = /** @type {(inputs: Common_Safe_To_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kann mitten im Spielstand entfernt werden`)
};

const fr_common_safe_to_remove = /** @type {(inputs: Common_Safe_To_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Peut être retiré en cours de partie`)
};

const it_common_safe_to_remove = /** @type {(inputs: Common_Safe_To_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Si può rimuovere a partita in corso`)
};

const nl_common_safe_to_remove = /** @type {(inputs: Common_Safe_To_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veilig te verwijderen tijdens een savegame`)
};

const pl_common_safe_to_remove = /** @type {(inputs: Common_Safe_To_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Można usunąć w trakcie rozgrywki`)
};

const pt_common_safe_to_remove = /** @type {(inputs: Common_Safe_To_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pode remover no meio do save`)
};

const ru_common_safe_to_remove = /** @type {(inputs: Common_Safe_To_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Можно удалить посреди прохождения`)
};

const sv_common_safe_to_remove = /** @type {(inputs: Common_Safe_To_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kan tas bort mitt i en sparfil`)
};

const tr_common_safe_to_remove = /** @type {(inputs: Common_Safe_To_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kayıt ortasında güvenle kaldırılabilir`)
};

const zh_common_safe_to_remove = /** @type {(inputs: Common_Safe_To_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`存档中途可安全移除`)
};

const ja_common_safe_to_remove = /** @type {(inputs: Common_Safe_To_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`セーブデータの途中でも安全に外せます`)
};

/**
* | output |
* | --- |
* | "Safe to remove mid-save" |
*
* @param {Common_Safe_To_RemoveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_safe_to_remove = /** @type {((inputs?: Common_Safe_To_RemoveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Safe_To_RemoveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_safe_to_remove(inputs)
	if (locale === "de") return de_common_safe_to_remove(inputs)
	if (locale === "fr") return fr_common_safe_to_remove(inputs)
	if (locale === "it") return it_common_safe_to_remove(inputs)
	if (locale === "nl") return nl_common_safe_to_remove(inputs)
	if (locale === "pl") return pl_common_safe_to_remove(inputs)
	if (locale === "pt") return pt_common_safe_to_remove(inputs)
	if (locale === "ru") return ru_common_safe_to_remove(inputs)
	if (locale === "sv") return sv_common_safe_to_remove(inputs)
	if (locale === "tr") return tr_common_safe_to_remove(inputs)
	if (locale === "zh") return zh_common_safe_to_remove(inputs)
	if (locale === "ja") return ja_common_safe_to_remove(inputs)
	return en_common_safe_to_remove(inputs)
});
