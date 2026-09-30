/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Mod_Banner_Archived_SuccessorInputs */

const en_mod_banner_archived_successor = /** @type {(inputs: Mod_Banner_Archived_SuccessorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`The creator no longer maintains this mod and points to ${i?.name} instead.`)
};

const es_mod_banner_archived_successor = /** @type {(inputs: Mod_Banner_Archived_SuccessorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`El creador ya no mantiene este mod y recomienda ${i?.name} en su lugar.`)
};

const de_mod_banner_archived_successor = /** @type {(inputs: Mod_Banner_Archived_SuccessorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Der Ersteller pflegt diesen Mod nicht mehr und empfiehlt stattdessen ${i?.name}.`)
};

const fr_mod_banner_archived_successor = /** @type {(inputs: Mod_Banner_Archived_SuccessorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Le créateur ne maintient plus ce mod et recommande ${i?.name} à la place.`)
};

const it_mod_banner_archived_successor = /** @type {(inputs: Mod_Banner_Archived_SuccessorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Il creatore non mantiene più questa mod e consiglia ${i?.name} al suo posto.`)
};

const nl_mod_banner_archived_successor = /** @type {(inputs: Mod_Banner_Archived_SuccessorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`De maker onderhoudt deze mod niet meer en raadt in plaats daarvan ${i?.name} aan.`)
};

const pl_mod_banner_archived_successor = /** @type {(inputs: Mod_Banner_Archived_SuccessorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Twórca już nie rozwija tego moda i poleca zamiast niego ${i?.name}.`)
};

const pt_mod_banner_archived_successor = /** @type {(inputs: Mod_Banner_Archived_SuccessorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`O criador não mantém mais este mod e recomenda ${i?.name} no lugar.`)
};

const ru_mod_banner_archived_successor = /** @type {(inputs: Mod_Banner_Archived_SuccessorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Автор больше не поддерживает этот мод и советует вместо него ${i?.name}.`)
};

const sv_mod_banner_archived_successor = /** @type {(inputs: Mod_Banner_Archived_SuccessorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Skaparen underhåller inte längre den här moden och rekommenderar ${i?.name} i stället.`)
};

const tr_mod_banner_archived_successor = /** @type {(inputs: Mod_Banner_Archived_SuccessorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Yapımcı artık bu modu geliştirmiyor ve yerine ${i?.name} öneriyor.`)
};

const zh_mod_banner_archived_successor = /** @type {(inputs: Mod_Banner_Archived_SuccessorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`作者已不再维护此模组，并推荐改用 ${i?.name}。`)
};

const ja_mod_banner_archived_successor = /** @type {(inputs: Mod_Banner_Archived_SuccessorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`作者はこの MOD の更新を終了し、代わりに ${i?.name} を勧めています。`)
};

/**
* | output |
* | --- |
* | "The creator no longer maintains this mod and points to {name} instead." |
*
* @param {Mod_Banner_Archived_SuccessorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_banner_archived_successor = /** @type {((inputs: Mod_Banner_Archived_SuccessorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Banner_Archived_SuccessorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_banner_archived_successor(inputs)
	if (locale === "de") return de_mod_banner_archived_successor(inputs)
	if (locale === "fr") return fr_mod_banner_archived_successor(inputs)
	if (locale === "it") return it_mod_banner_archived_successor(inputs)
	if (locale === "nl") return nl_mod_banner_archived_successor(inputs)
	if (locale === "pl") return pl_mod_banner_archived_successor(inputs)
	if (locale === "pt") return pt_mod_banner_archived_successor(inputs)
	if (locale === "ru") return ru_mod_banner_archived_successor(inputs)
	if (locale === "sv") return sv_mod_banner_archived_successor(inputs)
	if (locale === "tr") return tr_mod_banner_archived_successor(inputs)
	if (locale === "zh") return zh_mod_banner_archived_successor(inputs)
	if (locale === "ja") return ja_mod_banner_archived_successor(inputs)
	return en_mod_banner_archived_successor(inputs)
});
