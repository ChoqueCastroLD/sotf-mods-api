/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown>, version: NonNullable<unknown>, date: NonNullable<unknown> }} Mod_Version_Meta_DescriptionInputs */

const en_mod_version_meta_description = /** @type {(inputs: Mod_Version_Meta_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} v${i?.version} for Sons of the Forest, released ${i?.date}: changelog, file size, SHA-256, security scan and compatibility.`)
};

const es_mod_version_meta_description = /** @type {(inputs: Mod_Version_Meta_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} v${i?.version} para Sons of the Forest, publicada el ${i?.date}: cambios, tamaño, SHA-256, análisis de seguridad y compatibilidad.`)
};

const de_mod_version_meta_description = /** @type {(inputs: Mod_Version_Meta_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} v${i?.version} für Sons of the Forest, veröffentlicht am ${i?.date}: Changelog, Dateigröße, SHA-256, Sicherheitsscan und Kompatibilität.`)
};

const fr_mod_version_meta_description = /** @type {(inputs: Mod_Version_Meta_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} v${i?.version} pour Sons of the Forest, publiée le ${i?.date} : modifications, taille, SHA-256, analyse de sécurité et compatibilité.`)
};

const it_mod_version_meta_description = /** @type {(inputs: Mod_Version_Meta_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} v${i?.version} per Sons of the Forest, pubblicata il ${i?.date}: changelog, dimensione, SHA-256, scansione di sicurezza e compatibilità.`)
};

const nl_mod_version_meta_description = /** @type {(inputs: Mod_Version_Meta_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} v${i?.version} voor Sons of the Forest, uitgebracht op ${i?.date}: changelog, bestandsgrootte, SHA-256, beveiligingsscan en compatibiliteit.`)
};

const pl_mod_version_meta_description = /** @type {(inputs: Mod_Version_Meta_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} v${i?.version} do Sons of the Forest, wydana ${i?.date}: lista zmian, rozmiar, SHA-256, skan bezpieczeństwa i kompatybilność.`)
};

const pt_mod_version_meta_description = /** @type {(inputs: Mod_Version_Meta_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} v${i?.version} para Sons of the Forest, lançada em ${i?.date}: changelog, tamanho, SHA-256, verificação de segurança e compatibilidade.`)
};

const ru_mod_version_meta_description = /** @type {(inputs: Mod_Version_Meta_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} v${i?.version} для Sons of the Forest, выпуск ${i?.date}: изменения, размер, SHA-256, проверка безопасности и совместимость.`)
};

const sv_mod_version_meta_description = /** @type {(inputs: Mod_Version_Meta_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} v${i?.version} till Sons of the Forest, släppt ${i?.date}: ändringslogg, filstorlek, SHA-256, säkerhetsskanning och kompatibilitet.`)
};

const tr_mod_version_meta_description = /** @type {(inputs: Mod_Version_Meta_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sons of the Forest için ${i?.name} v${i?.version}, ${i?.date} tarihinde yayımlandı: değişiklik günlüğü, dosya boyutu, SHA-256, güvenlik taraması ve uyumluluk.`)
};

const zh_mod_version_meta_description = /** @type {(inputs: Mod_Version_Meta_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sons of the Forest 模组 ${i?.name} v${i?.version}，发布于 ${i?.date}：更新日志、文件大小、SHA-256、安全扫描和兼容性。`)
};

const ja_mod_version_meta_description = /** @type {(inputs: Mod_Version_Meta_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sons of the Forest 用 ${i?.name} v${i?.version}（${i?.date} 公開）：更新履歴、ファイルサイズ、SHA-256、セキュリティスキャン、互換性。`)
};

/**
* | output |
* | --- |
* | "{name} v{version} for Sons of the Forest, released {date}: changelog, file size, SHA-256, security scan and compatibility." |
*
* @param {Mod_Version_Meta_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_version_meta_description = /** @type {((inputs: Mod_Version_Meta_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Version_Meta_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_version_meta_description(inputs)
	if (locale === "de") return de_mod_version_meta_description(inputs)
	if (locale === "fr") return fr_mod_version_meta_description(inputs)
	if (locale === "it") return it_mod_version_meta_description(inputs)
	if (locale === "nl") return nl_mod_version_meta_description(inputs)
	if (locale === "pl") return pl_mod_version_meta_description(inputs)
	if (locale === "pt") return pt_mod_version_meta_description(inputs)
	if (locale === "ru") return ru_mod_version_meta_description(inputs)
	if (locale === "sv") return sv_mod_version_meta_description(inputs)
	if (locale === "tr") return tr_mod_version_meta_description(inputs)
	if (locale === "zh") return zh_mod_version_meta_description(inputs)
	if (locale === "ja") return ja_mod_version_meta_description(inputs)
	return en_mod_version_meta_description(inputs)
});
