/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Delete_Mode_Archive_HintInputs */

const en_settings_delete_mode_archive_hint = /** @type {(inputs: Settings_Delete_Mode_Archive_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`They are hidden from lists and search and no longer credited to you.`)
};

const es_settings_delete_mode_archive_hint = /** @type {(inputs: Settings_Delete_Mode_Archive_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desaparecen de los listados y de la búsqueda y dejan de atribuirse a ti.`)
};

const de_settings_delete_mode_archive_hint = /** @type {(inputs: Settings_Delete_Mode_Archive_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sie verschwinden aus Listen und Suche und werden dir nicht mehr zugeschrieben.`)
};

const fr_settings_delete_mode_archive_hint = /** @type {(inputs: Settings_Delete_Mode_Archive_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ils disparaissent des listes et de la recherche et ne vous sont plus attribués.`)
};

const it_settings_delete_mode_archive_hint = /** @type {(inputs: Settings_Delete_Mode_Archive_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spariscono da elenchi e ricerca e non ti vengono più attribuite.`)
};

const nl_settings_delete_mode_archive_hint = /** @type {(inputs: Settings_Delete_Mode_Archive_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ze verdwijnen uit lijsten en zoekresultaten en worden niet meer aan jou toegeschreven.`)
};

const pl_settings_delete_mode_archive_hint = /** @type {(inputs: Settings_Delete_Mode_Archive_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Znikną z list i wyszukiwarki i nie będą już przypisane do ciebie.`)
};

const pt_settings_delete_mode_archive_hint = /** @type {(inputs: Settings_Delete_Mode_Archive_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eles somem das listas e da busca e deixam de ser atribuídos a você.`)
};

const ru_settings_delete_mode_archive_hint = /** @type {(inputs: Settings_Delete_Mode_Archive_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Они исчезнут из списков и поиска и больше не будут приписаны вам.`)
};

const sv_settings_delete_mode_archive_hint = /** @type {(inputs: Settings_Delete_Mode_Archive_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De försvinner från listor och sök och tillskrivs inte längre dig.`)
};

const tr_settings_delete_mode_archive_hint = /** @type {(inputs: Settings_Delete_Mode_Archive_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Listelerden ve aramadan kaybolurlar ve artık sana atfedilmezler.`)
};

const zh_settings_delete_mode_archive_hint = /** @type {(inputs: Settings_Delete_Mode_Archive_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`它们会从列表和搜索中消失，也不再署你的名字。`)
};

const ja_settings_delete_mode_archive_hint = /** @type {(inputs: Settings_Delete_Mode_Archive_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一覧と検索から消え、あなたの作品としては表示されなくなります。`)
};

/**
* | output |
* | --- |
* | "They are hidden from lists and search and no longer credited to you." |
*
* @param {Settings_Delete_Mode_Archive_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_delete_mode_archive_hint = /** @type {((inputs?: Settings_Delete_Mode_Archive_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Delete_Mode_Archive_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_delete_mode_archive_hint(inputs)
	if (locale === "de") return de_settings_delete_mode_archive_hint(inputs)
	if (locale === "fr") return fr_settings_delete_mode_archive_hint(inputs)
	if (locale === "it") return it_settings_delete_mode_archive_hint(inputs)
	if (locale === "nl") return nl_settings_delete_mode_archive_hint(inputs)
	if (locale === "pl") return pl_settings_delete_mode_archive_hint(inputs)
	if (locale === "pt") return pt_settings_delete_mode_archive_hint(inputs)
	if (locale === "ru") return ru_settings_delete_mode_archive_hint(inputs)
	if (locale === "sv") return sv_settings_delete_mode_archive_hint(inputs)
	if (locale === "tr") return tr_settings_delete_mode_archive_hint(inputs)
	if (locale === "zh") return zh_settings_delete_mode_archive_hint(inputs)
	if (locale === "ja") return ja_settings_delete_mode_archive_hint(inputs)
	return en_settings_delete_mode_archive_hint(inputs)
});
