/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Settings_DraftsInputs */

const en_basecamp_settings_drafts = /** @type {(inputs: Basecamp_Settings_DraftsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unfinished uploads and versions are kept as drafts until you resume or delete them.`)
};

const es_basecamp_settings_drafts = /** @type {(inputs: Basecamp_Settings_DraftsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Las subidas y versiones sin terminar se guardan como borradores hasta que las retomes o las borres.`)
};

const de_basecamp_settings_drafts = /** @type {(inputs: Basecamp_Settings_DraftsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nicht abgeschlossene Uploads und Versionen bleiben als Entwürfe, bis du sie fortsetzt oder löschst.`)
};

const fr_basecamp_settings_drafts = /** @type {(inputs: Basecamp_Settings_DraftsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les envois et versions inachevés restent en brouillon jusqu’à ce que vous les repreniez ou les supprimiez.`)
};

const it_basecamp_settings_drafts = /** @type {(inputs: Basecamp_Settings_DraftsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I caricamenti e le versioni non finiti restano come bozze finché non li riprendi o li elimini.`)
};

const nl_basecamp_settings_drafts = /** @type {(inputs: Basecamp_Settings_DraftsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Onafgemaakte uploads en versies blijven als concept bewaard tot je ze hervat of verwijdert.`)
};

const pl_basecamp_settings_drafts = /** @type {(inputs: Basecamp_Settings_DraftsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niedokończone wysyłki i wersje zostają jako szkice, dopóki ich nie wznowisz lub nie usuniesz.`)
};

const pt_basecamp_settings_drafts = /** @type {(inputs: Basecamp_Settings_DraftsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Envios e versões não concluídos ficam como rascunhos até você retomá-los ou excluí-los.`)
};

const ru_basecamp_settings_drafts = /** @type {(inputs: Basecamp_Settings_DraftsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Незавершённые загрузки и версии хранятся как черновики, пока вы их не продолжите или не удалите.`)
};

const sv_basecamp_settings_drafts = /** @type {(inputs: Basecamp_Settings_DraftsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oavslutade uppladdningar och versioner sparas som utkast tills du återupptar eller tar bort dem.`)
};

const tr_basecamp_settings_drafts = /** @type {(inputs: Basecamp_Settings_DraftsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tamamlanmamış yüklemeler ve sürümler, sen devam edene ya da silene kadar taslak olarak kalır.`)
};

const zh_basecamp_settings_drafts = /** @type {(inputs: Basecamp_Settings_DraftsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未完成的上传和版本会保存为草稿，直到你继续或删除它们。`)
};

const ja_basecamp_settings_drafts = /** @type {(inputs: Basecamp_Settings_DraftsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未完了のアップロードやバージョンは、再開するか削除するまで下書きとして残ります。`)
};

/**
* | output |
* | --- |
* | "Unfinished uploads and versions are kept as drafts until you resume or delete them." |
*
* @param {Basecamp_Settings_DraftsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_settings_drafts = /** @type {((inputs?: Basecamp_Settings_DraftsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Settings_DraftsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_settings_drafts(inputs)
	if (locale === "de") return de_basecamp_settings_drafts(inputs)
	if (locale === "fr") return fr_basecamp_settings_drafts(inputs)
	if (locale === "it") return it_basecamp_settings_drafts(inputs)
	if (locale === "nl") return nl_basecamp_settings_drafts(inputs)
	if (locale === "pl") return pl_basecamp_settings_drafts(inputs)
	if (locale === "pt") return pt_basecamp_settings_drafts(inputs)
	if (locale === "ru") return ru_basecamp_settings_drafts(inputs)
	if (locale === "sv") return sv_basecamp_settings_drafts(inputs)
	if (locale === "tr") return tr_basecamp_settings_drafts(inputs)
	if (locale === "zh") return zh_basecamp_settings_drafts(inputs)
	if (locale === "ja") return ja_basecamp_settings_drafts(inputs)
	return en_basecamp_settings_drafts(inputs)
});
