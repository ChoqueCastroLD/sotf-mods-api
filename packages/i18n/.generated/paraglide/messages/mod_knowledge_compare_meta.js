/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Mod_Knowledge_Compare_MetaInputs */

const en_mod_knowledge_compare_meta = /** @type {(inputs: Mod_Knowledge_Compare_MetaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`What changed between two versions of ${i?.name}: files, manifest and changelog.`)
};

const es_mod_knowledge_compare_meta = /** @type {(inputs: Mod_Knowledge_Compare_MetaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Qué cambió entre dos versiones de ${i?.name}: archivos, manifiesto y registro de cambios.`)
};

const de_mod_knowledge_compare_meta = /** @type {(inputs: Mod_Knowledge_Compare_MetaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Was sich zwischen zwei Versionen von ${i?.name} geändert hat: Dateien, Manifest und Changelog.`)
};

const fr_mod_knowledge_compare_meta = /** @type {(inputs: Mod_Knowledge_Compare_MetaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ce qui a changé entre deux versions de ${i?.name} : fichiers, manifeste et journal des modifications.`)
};

const it_mod_knowledge_compare_meta = /** @type {(inputs: Mod_Knowledge_Compare_MetaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Cosa è cambiato tra due versioni di ${i?.name}: file, manifest e changelog.`)
};

const nl_mod_knowledge_compare_meta = /** @type {(inputs: Mod_Knowledge_Compare_MetaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wat er veranderd is tussen twee versies van ${i?.name}: bestanden, manifest en changelog.`)
};

const pl_mod_knowledge_compare_meta = /** @type {(inputs: Mod_Knowledge_Compare_MetaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Co zmieniło się między dwiema wersjami ${i?.name}: pliki, manifest i lista zmian.`)
};

const pt_mod_knowledge_compare_meta = /** @type {(inputs: Mod_Knowledge_Compare_MetaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`O que mudou entre duas versões de ${i?.name}: arquivos, manifesto e registro de alterações.`)
};

const ru_mod_knowledge_compare_meta = /** @type {(inputs: Mod_Knowledge_Compare_MetaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Что изменилось между двумя версиями ${i?.name}: файлы, манифест и список изменений.`)
};

const sv_mod_knowledge_compare_meta = /** @type {(inputs: Mod_Knowledge_Compare_MetaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Vad som ändrats mellan två versioner av ${i?.name}: filer, manifest och ändringslogg.`)
};

const tr_mod_knowledge_compare_meta = /** @type {(inputs: Mod_Knowledge_Compare_MetaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} için iki sürüm arasındaki değişiklikler: dosyalar, manifest ve değişiklik günlüğü.`)
};

const zh_mod_knowledge_compare_meta = /** @type {(inputs: Mod_Knowledge_Compare_MetaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 两个版本之间的变化：文件、清单和更新日志。`)
};

const ja_mod_knowledge_compare_meta = /** @type {(inputs: Mod_Knowledge_Compare_MetaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} の2つのバージョン間の変更点：ファイル、マニフェスト、変更履歴。`)
};

/**
* | output |
* | --- |
* | "What changed between two versions of {name}: files, manifest and changelog." |
*
* @param {Mod_Knowledge_Compare_MetaInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_compare_meta = /** @type {((inputs: Mod_Knowledge_Compare_MetaInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Compare_MetaInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_compare_meta(inputs)
	if (locale === "de") return de_mod_knowledge_compare_meta(inputs)
	if (locale === "fr") return fr_mod_knowledge_compare_meta(inputs)
	if (locale === "it") return it_mod_knowledge_compare_meta(inputs)
	if (locale === "nl") return nl_mod_knowledge_compare_meta(inputs)
	if (locale === "pl") return pl_mod_knowledge_compare_meta(inputs)
	if (locale === "pt") return pt_mod_knowledge_compare_meta(inputs)
	if (locale === "ru") return ru_mod_knowledge_compare_meta(inputs)
	if (locale === "sv") return sv_mod_knowledge_compare_meta(inputs)
	if (locale === "tr") return tr_mod_knowledge_compare_meta(inputs)
	if (locale === "zh") return zh_mod_knowledge_compare_meta(inputs)
	if (locale === "ja") return ja_mod_knowledge_compare_meta(inputs)
	return en_mod_knowledge_compare_meta(inputs)
});
