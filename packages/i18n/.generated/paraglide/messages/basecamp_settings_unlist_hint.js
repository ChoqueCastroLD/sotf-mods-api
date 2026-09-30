/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Settings_Unlist_HintInputs */

const en_basecamp_settings_unlist_hint = /** @type {(inputs: Basecamp_Settings_Unlist_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hide it from lists and search. Anyone with the link can still download it.`)
};

const es_basecamp_settings_unlist_hint = /** @type {(inputs: Basecamp_Settings_Unlist_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ocúltalo de listas y búsqueda. Quien tenga el enlace podrá seguir descargándolo.`)
};

const de_basecamp_settings_unlist_hint = /** @type {(inputs: Basecamp_Settings_Unlist_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aus Listen und Suche ausblenden. Wer den Link hat, kann ihn weiter herunterladen.`)
};

const fr_basecamp_settings_unlist_hint = /** @type {(inputs: Basecamp_Settings_Unlist_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le masquer des listes et de la recherche. Toute personne ayant le lien peut encore le télécharger.`)
};

const it_basecamp_settings_unlist_hint = /** @type {(inputs: Basecamp_Settings_Unlist_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nascondila da elenchi e ricerca. Chi ha il link può ancora scaricarla.`)
};

const nl_basecamp_settings_unlist_hint = /** @type {(inputs: Basecamp_Settings_Unlist_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verberg hem in lijsten en zoeken. Wie de link heeft, kan hem nog downloaden.`)
};

const pl_basecamp_settings_unlist_hint = /** @type {(inputs: Basecamp_Settings_Unlist_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ukryj go na listach i w wyszukiwaniu. Każdy z linkiem nadal może go pobrać.`)
};

const pt_basecamp_settings_unlist_hint = /** @type {(inputs: Basecamp_Settings_Unlist_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ocultar nas listas e na pesquisa. Quem tiver o link ainda pode baixá-lo.`)
};

const ru_basecamp_settings_unlist_hint = /** @type {(inputs: Basecamp_Settings_Unlist_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скрыть из списков и поиска. Все, у кого есть ссылка, по-прежнему смогут скачать.`)
};

const sv_basecamp_settings_unlist_hint = /** @type {(inputs: Basecamp_Settings_Unlist_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dölj den i listor och sökning. Alla med länken kan fortfarande ladda ner den.`)
};

const tr_basecamp_settings_unlist_hint = /** @type {(inputs: Basecamp_Settings_Unlist_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Listelerde ve aramada gizle. Bağlantısı olan herkes indirmeye devam edebilir.`)
};

const zh_basecamp_settings_unlist_hint = /** @type {(inputs: Basecamp_Settings_Unlist_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`从列表和搜索中隐藏。持有链接的人仍可下载。`)
};

const ja_basecamp_settings_unlist_hint = /** @type {(inputs: Basecamp_Settings_Unlist_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一覧と検索から隠します。リンクを知っている人は引き続きダウンロードできます。`)
};

/**
* | output |
* | --- |
* | "Hide it from lists and search. Anyone with the link can still download it." |
*
* @param {Basecamp_Settings_Unlist_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_settings_unlist_hint = /** @type {((inputs?: Basecamp_Settings_Unlist_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Settings_Unlist_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_settings_unlist_hint(inputs)
	if (locale === "de") return de_basecamp_settings_unlist_hint(inputs)
	if (locale === "fr") return fr_basecamp_settings_unlist_hint(inputs)
	if (locale === "it") return it_basecamp_settings_unlist_hint(inputs)
	if (locale === "nl") return nl_basecamp_settings_unlist_hint(inputs)
	if (locale === "pl") return pl_basecamp_settings_unlist_hint(inputs)
	if (locale === "pt") return pt_basecamp_settings_unlist_hint(inputs)
	if (locale === "ru") return ru_basecamp_settings_unlist_hint(inputs)
	if (locale === "sv") return sv_basecamp_settings_unlist_hint(inputs)
	if (locale === "tr") return tr_basecamp_settings_unlist_hint(inputs)
	if (locale === "zh") return zh_basecamp_settings_unlist_hint(inputs)
	if (locale === "ja") return ja_basecamp_settings_unlist_hint(inputs)
	return en_basecamp_settings_unlist_hint(inputs)
});
