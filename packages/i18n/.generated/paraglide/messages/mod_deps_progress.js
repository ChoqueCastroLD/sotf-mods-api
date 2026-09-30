/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ current: NonNullable<unknown>, total: NonNullable<unknown> }} Mod_Deps_ProgressInputs */

const en_mod_deps_progress = /** @type {(inputs: Mod_Deps_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Downloading ${i?.current} of ${i?.total}…`)
};

const es_mod_deps_progress = /** @type {(inputs: Mod_Deps_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Descargando ${i?.current} de ${i?.total}…`)
};

const de_mod_deps_progress = /** @type {(inputs: Mod_Deps_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Lade ${i?.current} von ${i?.total} herunter…`)
};

const fr_mod_deps_progress = /** @type {(inputs: Mod_Deps_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Téléchargement ${i?.current} sur ${i?.total}…`)
};

const it_mod_deps_progress = /** @type {(inputs: Mod_Deps_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Download ${i?.current} di ${i?.total}…`)
};

const nl_mod_deps_progress = /** @type {(inputs: Mod_Deps_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Downloaden ${i?.current} van ${i?.total}…`)
};

const pl_mod_deps_progress = /** @type {(inputs: Mod_Deps_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Pobieranie ${i?.current} z ${i?.total}…`)
};

const pt_mod_deps_progress = /** @type {(inputs: Mod_Deps_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Baixando ${i?.current} de ${i?.total}…`)
};

const ru_mod_deps_progress = /** @type {(inputs: Mod_Deps_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Загрузка ${i?.current} из ${i?.total}…`)
};

const sv_mod_deps_progress = /** @type {(inputs: Mod_Deps_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Laddar ner ${i?.current} av ${i?.total}…`)
};

const tr_mod_deps_progress = /** @type {(inputs: Mod_Deps_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`İndiriliyor: ${i?.current} / ${i?.total}…`)
};

const zh_mod_deps_progress = /** @type {(inputs: Mod_Deps_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`正在下载第 ${i?.current} 个，共 ${i?.total} 个…`)
};

const ja_mod_deps_progress = /** @type {(inputs: Mod_Deps_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.total} 件中 ${i?.current} 件目をダウンロード中…`)
};

/**
* | output |
* | --- |
* | "Downloading {current} of {total}…" |
*
* @param {Mod_Deps_ProgressInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_deps_progress = /** @type {((inputs: Mod_Deps_ProgressInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Deps_ProgressInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_deps_progress(inputs)
	if (locale === "de") return de_mod_deps_progress(inputs)
	if (locale === "fr") return fr_mod_deps_progress(inputs)
	if (locale === "it") return it_mod_deps_progress(inputs)
	if (locale === "nl") return nl_mod_deps_progress(inputs)
	if (locale === "pl") return pl_mod_deps_progress(inputs)
	if (locale === "pt") return pt_mod_deps_progress(inputs)
	if (locale === "ru") return ru_mod_deps_progress(inputs)
	if (locale === "sv") return sv_mod_deps_progress(inputs)
	if (locale === "tr") return tr_mod_deps_progress(inputs)
	if (locale === "zh") return zh_mod_deps_progress(inputs)
	if (locale === "ja") return ja_mod_deps_progress(inputs)
	return en_mod_deps_progress(inputs)
});
