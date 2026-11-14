/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Mods_DescriptionInputs */

const en_modpacks_mods_description = /** @type {(inputs: Modpacks_Mods_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Only approved mods can be added. Their dependencies are added automatically.`)
};

const es_modpacks_mods_description = /** @type {(inputs: Modpacks_Mods_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo se pueden añadir mods aprobados. Sus dependencias se añaden automáticamente.`)
};

const de_modpacks_mods_description = /** @type {(inputs: Modpacks_Mods_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nur freigegebene Mods können hinzugefügt werden. Ihre Abhängigkeiten werden automatisch hinzugefügt.`)
};

const fr_modpacks_mods_description = /** @type {(inputs: Modpacks_Mods_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seuls les mods approuvés peuvent être ajoutés. Leurs dépendances sont ajoutées automatiquement.`)
};

const it_modpacks_mods_description = /** @type {(inputs: Modpacks_Mods_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Si possono aggiungere solo mod approvate. Le loro dipendenze vengono aggiunte automaticamente.`)
};

const nl_modpacks_mods_description = /** @type {(inputs: Modpacks_Mods_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alleen goedgekeurde mods kunnen worden toegevoegd. Hun afhankelijkheden worden automatisch toegevoegd.`)
};

const pl_modpacks_mods_description = /** @type {(inputs: Modpacks_Mods_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Można dodawać tylko zatwierdzone mody. Ich zależności są dodawane automatycznie.`)
};

const pt_modpacks_mods_description = /** @type {(inputs: Modpacks_Mods_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Só é possível adicionar mods aprovados. As dependências deles são adicionadas automaticamente.`)
};

const ru_modpacks_mods_description = /** @type {(inputs: Modpacks_Mods_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Добавлять можно только одобренные моды. Их зависимости добавляются автоматически.`)
};

const sv_modpacks_mods_description = /** @type {(inputs: Modpacks_Mods_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Endast godkända moddar kan läggas till. Deras beroenden läggs till automatiskt.`)
};

const tr_modpacks_mods_description = /** @type {(inputs: Modpacks_Mods_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yalnızca onaylı modlar eklenebilir. Bağımlılıkları otomatik eklenir.`)
};

const zh_modpacks_mods_description = /** @type {(inputs: Modpacks_Mods_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`只能添加已获批准的模组。它们的依赖会自动添加。`)
};

const ja_modpacks_mods_description = /** @type {(inputs: Modpacks_Mods_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`承認済みの Mod だけを追加できます。依存関係は自動で追加されます。`)
};

/**
* | output |
* | --- |
* | "Only approved mods can be added. Their dependencies are added automatically." |
*
* @param {Modpacks_Mods_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_mods_description = /** @type {((inputs?: Modpacks_Mods_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Mods_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_mods_description(inputs)
	if (locale === "de") return de_modpacks_mods_description(inputs)
	if (locale === "fr") return fr_modpacks_mods_description(inputs)
	if (locale === "it") return it_modpacks_mods_description(inputs)
	if (locale === "nl") return nl_modpacks_mods_description(inputs)
	if (locale === "pl") return pl_modpacks_mods_description(inputs)
	if (locale === "pt") return pt_modpacks_mods_description(inputs)
	if (locale === "ru") return ru_modpacks_mods_description(inputs)
	if (locale === "sv") return sv_modpacks_mods_description(inputs)
	if (locale === "tr") return tr_modpacks_mods_description(inputs)
	if (locale === "zh") return zh_modpacks_mods_description(inputs)
	if (locale === "ja") return ja_modpacks_mods_description(inputs)
	return en_modpacks_mods_description(inputs)
});
