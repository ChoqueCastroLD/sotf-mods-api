/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Editor_Empty_TextInputs */

const en_kits_editor_empty_text = /** @type {(inputs: Kits_Editor_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search for a mod above. Its dependencies are added on their own.`)
};

const es_kits_editor_empty_text = /** @type {(inputs: Kits_Editor_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Busca un mod arriba. Sus dependencias se añaden solas.`)
};

const de_kits_editor_empty_text = /** @type {(inputs: Kits_Editor_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Such oben nach einem Mod. Seine Abhängigkeiten kommen von allein dazu.`)
};

const fr_kits_editor_empty_text = /** @type {(inputs: Kits_Editor_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cherchez un mod ci-dessus. Ses dépendances s’ajoutent toutes seules.`)
};

const it_kits_editor_empty_text = /** @type {(inputs: Kits_Editor_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerca una mod qui sopra. Le sue dipendenze si aggiungono da sole.`)
};

const nl_kits_editor_empty_text = /** @type {(inputs: Kits_Editor_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zoek hierboven een mod. De afhankelijkheden komen er vanzelf bij.`)
};

const pl_kits_editor_empty_text = /** @type {(inputs: Kits_Editor_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyszukaj mod powyżej. Jego zależności dodadzą się same.`)
};

const pt_kits_editor_empty_text = /** @type {(inputs: Kits_Editor_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Busque um mod acima. As dependências são adicionadas sozinhas.`)
};

const ru_kits_editor_empty_text = /** @type {(inputs: Kits_Editor_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Найдите мод выше. Его зависимости добавятся сами.`)
};

const sv_kits_editor_empty_text = /** @type {(inputs: Kits_Editor_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sök efter en modd ovan. Dess beroenden läggs till automatiskt.`)
};

const tr_kits_editor_empty_text = /** @type {(inputs: Kits_Editor_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yukarıdan bir mod ara. Bağımlılıkları kendiliğinden eklenir.`)
};

const zh_kits_editor_empty_text = /** @type {(inputs: Kits_Editor_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在上方搜索模组，依赖项会自动加入。`)
};

const ja_kits_editor_empty_text = /** @type {(inputs: Kits_Editor_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上の検索欄から MOD を探してください。依存 MOD は自動で追加されます。`)
};

/**
* | output |
* | --- |
* | "Search for a mod above. Its dependencies are added on their own." |
*
* @param {Kits_Editor_Empty_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_editor_empty_text = /** @type {((inputs?: Kits_Editor_Empty_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Editor_Empty_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_editor_empty_text(inputs)
	if (locale === "de") return de_kits_editor_empty_text(inputs)
	if (locale === "fr") return fr_kits_editor_empty_text(inputs)
	if (locale === "it") return it_kits_editor_empty_text(inputs)
	if (locale === "nl") return nl_kits_editor_empty_text(inputs)
	if (locale === "pl") return pl_kits_editor_empty_text(inputs)
	if (locale === "pt") return pt_kits_editor_empty_text(inputs)
	if (locale === "ru") return ru_kits_editor_empty_text(inputs)
	if (locale === "sv") return sv_kits_editor_empty_text(inputs)
	if (locale === "tr") return tr_kits_editor_empty_text(inputs)
	if (locale === "zh") return zh_kits_editor_empty_text(inputs)
	if (locale === "ja") return ja_kits_editor_empty_text(inputs)
	return en_kits_editor_empty_text(inputs)
});
