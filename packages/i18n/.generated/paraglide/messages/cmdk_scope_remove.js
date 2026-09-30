/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ scope: NonNullable<unknown> }} Cmdk_Scope_RemoveInputs */

const en_cmdk_scope_remove = /** @type {(inputs: Cmdk_Scope_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Search everything again (remove “${i?.scope}”)`)
};

const es_cmdk_scope_remove = /** @type {(inputs: Cmdk_Scope_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Volver a buscar en todo (quitar «${i?.scope}»)`)
};

const de_cmdk_scope_remove = /** @type {(inputs: Cmdk_Scope_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wieder überall suchen („${i?.scope}“ entfernen)`)
};

const fr_cmdk_scope_remove = /** @type {(inputs: Cmdk_Scope_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rechercher partout (retirer « ${i?.scope} »)`)
};

const it_cmdk_scope_remove = /** @type {(inputs: Cmdk_Scope_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Torna a cercare ovunque (rimuovi «${i?.scope}»)`)
};

const nl_cmdk_scope_remove = /** @type {(inputs: Cmdk_Scope_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Weer overal zoeken (‘${i?.scope}’ verwijderen)`)
};

const pl_cmdk_scope_remove = /** @type {(inputs: Cmdk_Scope_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Szukaj znowu wszędzie (usuń „${i?.scope}”)`)
};

const pt_cmdk_scope_remove = /** @type {(inputs: Cmdk_Scope_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Buscar em tudo de novo (remover “${i?.scope}”)`)
};

const ru_cmdk_scope_remove = /** @type {(inputs: Cmdk_Scope_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Снова искать везде (убрать «${i?.scope}»)`)
};

const sv_cmdk_scope_remove = /** @type {(inputs: Cmdk_Scope_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sök i allt igen (ta bort ”${i?.scope}”)`)
};

const tr_cmdk_scope_remove = /** @type {(inputs: Cmdk_Scope_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Yeniden her yerde ara (“${i?.scope}” filtresini kaldır)`)
};

const zh_cmdk_scope_remove = /** @type {(inputs: Cmdk_Scope_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`重新搜索全部（移除“${i?.scope}”）`)
};

const ja_cmdk_scope_remove = /** @type {(inputs: Cmdk_Scope_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`すべてを再検索（「${i?.scope}」を解除）`)
};

/**
* | output |
* | --- |
* | "Search everything again (remove “{scope}”)" |
*
* @param {Cmdk_Scope_RemoveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_scope_remove = /** @type {((inputs: Cmdk_Scope_RemoveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Scope_RemoveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_scope_remove(inputs)
	if (locale === "de") return de_cmdk_scope_remove(inputs)
	if (locale === "fr") return fr_cmdk_scope_remove(inputs)
	if (locale === "it") return it_cmdk_scope_remove(inputs)
	if (locale === "nl") return nl_cmdk_scope_remove(inputs)
	if (locale === "pl") return pl_cmdk_scope_remove(inputs)
	if (locale === "pt") return pt_cmdk_scope_remove(inputs)
	if (locale === "ru") return ru_cmdk_scope_remove(inputs)
	if (locale === "sv") return sv_cmdk_scope_remove(inputs)
	if (locale === "tr") return tr_cmdk_scope_remove(inputs)
	if (locale === "zh") return zh_cmdk_scope_remove(inputs)
	if (locale === "ja") return ja_cmdk_scope_remove(inputs)
	return en_cmdk_scope_remove(inputs)
});
