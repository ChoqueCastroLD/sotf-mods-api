/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Mods_EmptyInputs */

const en_modpacks_mods_empty = /** @type {(inputs: Modpacks_Mods_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No mods yet. Search below to add some.`)
};

const es_modpacks_mods_empty = /** @type {(inputs: Modpacks_Mods_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún no hay mods. Busca abajo para añadir algunos.`)
};

const de_modpacks_mods_empty = /** @type {(inputs: Modpacks_Mods_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch keine Mods. Suche unten, um welche hinzuzufügen.`)
};

const fr_modpacks_mods_empty = /** @type {(inputs: Modpacks_Mods_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun mod pour l’instant. Cherchez ci-dessous pour en ajouter.`)
};

const it_modpacks_mods_empty = /** @type {(inputs: Modpacks_Mods_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ancora nessuna mod. Cerca qui sotto per aggiungerne.`)
};

const nl_modpacks_mods_empty = /** @type {(inputs: Modpacks_Mods_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog geen mods. Zoek hieronder om er een paar toe te voegen.`)
};

const pl_modpacks_mods_empty = /** @type {(inputs: Modpacks_Mods_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak modów. Wyszukaj poniżej, aby je dodać.`)
};

const pt_modpacks_mods_empty = /** @type {(inputs: Modpacks_Mods_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ainda não há mods. Pesquise abaixo para adicionar alguns.`)
};

const ru_modpacks_mods_empty = /** @type {(inputs: Modpacks_Mods_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Модов пока нет. Найдите их через поиск ниже.`)
};

const sv_modpacks_mods_empty = /** @type {(inputs: Modpacks_Mods_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga moddar än. Sök nedan för att lägga till några.`)
};

const tr_modpacks_mods_empty = /** @type {(inputs: Modpacks_Mods_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz mod yok. Eklemek için aşağıda ara.`)
};

const zh_modpacks_mods_empty = /** @type {(inputs: Modpacks_Mods_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`还没有模组。在下方搜索并添加。`)
};

const ja_modpacks_mods_empty = /** @type {(inputs: Modpacks_Mods_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod はまだありません。下で検索して追加してください。`)
};

/**
* | output |
* | --- |
* | "No mods yet. Search below to add some." |
*
* @param {Modpacks_Mods_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_mods_empty = /** @type {((inputs?: Modpacks_Mods_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Mods_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_mods_empty(inputs)
	if (locale === "de") return de_modpacks_mods_empty(inputs)
	if (locale === "fr") return fr_modpacks_mods_empty(inputs)
	if (locale === "it") return it_modpacks_mods_empty(inputs)
	if (locale === "nl") return nl_modpacks_mods_empty(inputs)
	if (locale === "pl") return pl_modpacks_mods_empty(inputs)
	if (locale === "pt") return pt_modpacks_mods_empty(inputs)
	if (locale === "ru") return ru_modpacks_mods_empty(inputs)
	if (locale === "sv") return sv_modpacks_mods_empty(inputs)
	if (locale === "tr") return tr_modpacks_mods_empty(inputs)
	if (locale === "zh") return zh_modpacks_mods_empty(inputs)
	if (locale === "ja") return ja_modpacks_mods_empty(inputs)
	return en_modpacks_mods_empty(inputs)
});
