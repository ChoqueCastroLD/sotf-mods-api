/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ mod: NonNullable<unknown> }} Me_Downloads_Remove_LabelInputs */

const en_me_downloads_remove_label = /** @type {(inputs: Me_Downloads_Remove_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Remove ${i?.mod} from the list`)
};

const es_me_downloads_remove_label = /** @type {(inputs: Me_Downloads_Remove_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Quitar ${i?.mod} de la lista`)
};

const de_me_downloads_remove_label = /** @type {(inputs: Me_Downloads_Remove_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} aus der Liste entfernen`)
};

const fr_me_downloads_remove_label = /** @type {(inputs: Me_Downloads_Remove_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Retirer ${i?.mod} de la liste`)
};

const it_me_downloads_remove_label = /** @type {(inputs: Me_Downloads_Remove_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rimuovi ${i?.mod} dall’elenco`)
};

const nl_me_downloads_remove_label = /** @type {(inputs: Me_Downloads_Remove_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} uit de lijst verwijderen`)
};

const pl_me_downloads_remove_label = /** @type {(inputs: Me_Downloads_Remove_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Usuń ${i?.mod} z listy`)
};

const pt_me_downloads_remove_label = /** @type {(inputs: Me_Downloads_Remove_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Remover ${i?.mod} da lista`)
};

const ru_me_downloads_remove_label = /** @type {(inputs: Me_Downloads_Remove_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Убрать ${i?.mod} из списка`)
};

const sv_me_downloads_remove_label = /** @type {(inputs: Me_Downloads_Remove_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ta bort ${i?.mod} från listan`)
};

const tr_me_downloads_remove_label = /** @type {(inputs: Me_Downloads_Remove_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} listeden kaldır`)
};

const zh_me_downloads_remove_label = /** @type {(inputs: Me_Downloads_Remove_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`将 ${i?.mod} 从列表中移除`)
};

const ja_me_downloads_remove_label = /** @type {(inputs: Me_Downloads_Remove_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} をリストから削除`)
};

/**
* | output |
* | --- |
* | "Remove {mod} from the list" |
*
* @param {Me_Downloads_Remove_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_downloads_remove_label = /** @type {((inputs: Me_Downloads_Remove_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Downloads_Remove_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_downloads_remove_label(inputs)
	if (locale === "de") return de_me_downloads_remove_label(inputs)
	if (locale === "fr") return fr_me_downloads_remove_label(inputs)
	if (locale === "it") return it_me_downloads_remove_label(inputs)
	if (locale === "nl") return nl_me_downloads_remove_label(inputs)
	if (locale === "pl") return pl_me_downloads_remove_label(inputs)
	if (locale === "pt") return pt_me_downloads_remove_label(inputs)
	if (locale === "ru") return ru_me_downloads_remove_label(inputs)
	if (locale === "sv") return sv_me_downloads_remove_label(inputs)
	if (locale === "tr") return tr_me_downloads_remove_label(inputs)
	if (locale === "zh") return zh_me_downloads_remove_label(inputs)
	if (locale === "ja") return ja_me_downloads_remove_label(inputs)
	return en_me_downloads_remove_label(inputs)
});
