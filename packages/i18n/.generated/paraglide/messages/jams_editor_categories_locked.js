/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Categories_LockedInputs */

const en_jams_editor_categories_locked = /** @type {(inputs: Jams_Editor_Categories_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categories can't change once voting has started.`)
};

const es_jams_editor_categories_locked = /** @type {(inputs: Jams_Editor_Categories_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Las categorías no pueden cambiar una vez iniciada la votación.`)
};

const de_jams_editor_categories_locked = /** @type {(inputs: Jams_Editor_Categories_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategorien lassen sich nach Beginn der Abstimmung nicht mehr ändern.`)
};

const fr_jams_editor_categories_locked = /** @type {(inputs: Jams_Editor_Categories_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les catégories ne peuvent plus changer une fois le vote commencé.`)
};

const it_jams_editor_categories_locked = /** @type {(inputs: Jams_Editor_Categories_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le categorie non si possono modificare dopo l'inizio della votazione.`)
};

const nl_jams_editor_categories_locked = /** @type {(inputs: Jams_Editor_Categories_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categorieën kunnen niet meer wijzigen zodra het stemmen is begonnen.`)
};

const pl_jams_editor_categories_locked = /** @type {(inputs: Jams_Editor_Categories_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategorii nie można zmieniać po rozpoczęciu głosowania.`)
};

const pt_jams_editor_categories_locked = /** @type {(inputs: Jams_Editor_Categories_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`As categorias não podem mudar depois que a votação começa.`)
};

const ru_jams_editor_categories_locked = /** @type {(inputs: Jams_Editor_Categories_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`После начала голосования категории менять нельзя.`)
};

const sv_jams_editor_categories_locked = /** @type {(inputs: Jams_Editor_Categories_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategorier kan inte ändras när röstningen har börjat.`)
};

const tr_jams_editor_categories_locked = /** @type {(inputs: Jams_Editor_Categories_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oylama başladıktan sonra kategoriler değiştirilemez.`)
};

const zh_jams_editor_categories_locked = /** @type {(inputs: Jams_Editor_Categories_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`投票开始后不能再更改类别。`)
};

const ja_jams_editor_categories_locked = /** @type {(inputs: Jams_Editor_Categories_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`投票開始後はカテゴリを変更できません。`)
};

/**
* | output |
* | --- |
* | "Categories can't change once voting has started." |
*
* @param {Jams_Editor_Categories_LockedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_categories_locked = /** @type {((inputs?: Jams_Editor_Categories_LockedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Categories_LockedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_categories_locked(inputs)
	if (locale === "de") return de_jams_editor_categories_locked(inputs)
	if (locale === "fr") return fr_jams_editor_categories_locked(inputs)
	if (locale === "it") return it_jams_editor_categories_locked(inputs)
	if (locale === "nl") return nl_jams_editor_categories_locked(inputs)
	if (locale === "pl") return pl_jams_editor_categories_locked(inputs)
	if (locale === "pt") return pt_jams_editor_categories_locked(inputs)
	if (locale === "ru") return ru_jams_editor_categories_locked(inputs)
	if (locale === "sv") return sv_jams_editor_categories_locked(inputs)
	if (locale === "tr") return tr_jams_editor_categories_locked(inputs)
	if (locale === "zh") return zh_jams_editor_categories_locked(inputs)
	if (locale === "ja") return ja_jams_editor_categories_locked(inputs)
	return en_jams_editor_categories_locked(inputs)
});
