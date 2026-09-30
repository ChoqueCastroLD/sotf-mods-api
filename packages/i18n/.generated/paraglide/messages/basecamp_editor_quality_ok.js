/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Editor_Quality_OkInputs */

const en_basecamp_editor_quality_ok = /** @type {(inputs: Basecamp_Editor_Quality_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nothing missing: a gallery, a full description, the source, platform, tags and licence.`)
};

const es_basecamp_editor_quality_ok = /** @type {(inputs: Basecamp_Editor_Quality_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No falta nada: galería, descripción completa, código fuente, plataforma, tags y licencia.`)
};

const de_basecamp_editor_quality_ok = /** @type {(inputs: Basecamp_Editor_Quality_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nichts fehlt: Galerie, vollständige Beschreibung, Quellcode, Plattform, Tags und Lizenz.`)
};

const fr_basecamp_editor_quality_ok = /** @type {(inputs: Basecamp_Editor_Quality_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rien ne manque : galerie, description complète, code source, plateforme, tags et licence.`)
};

const it_basecamp_editor_quality_ok = /** @type {(inputs: Basecamp_Editor_Quality_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non manca nulla: galleria, descrizione completa, codice sorgente, piattaforma, tag e licenza.`)
};

const nl_basecamp_editor_quality_ok = /** @type {(inputs: Basecamp_Editor_Quality_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Er ontbreekt niets: galerij, volledige beschrijving, broncode, platform, tags en licentie.`)
};

const pl_basecamp_editor_quality_ok = /** @type {(inputs: Basecamp_Editor_Quality_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niczego nie brakuje: galeria, pełny opis, kod źródłowy, platforma, tagi i licencja.`)
};

const pt_basecamp_editor_quality_ok = /** @type {(inputs: Basecamp_Editor_Quality_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não falta nada: galeria, descrição completa, código-fonte, plataforma, tags e licença.`)
};

const ru_basecamp_editor_quality_ok = /** @type {(inputs: Basecamp_Editor_Quality_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Всё на месте: галерея, полное описание, исходный код, платформа, теги и лицензия.`)
};

const sv_basecamp_editor_quality_ok = /** @type {(inputs: Basecamp_Editor_Quality_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inget saknas: galleri, fullständig beskrivning, källkod, plattform, taggar och licens.`)
};

const tr_basecamp_editor_quality_ok = /** @type {(inputs: Basecamp_Editor_Quality_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eksik yok: galeri, tam açıklama, kaynak kod, platform, etiketler ve lisans.`)
};

const zh_basecamp_editor_quality_ok = /** @type {(inputs: Basecamp_Editor_Quality_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一应俱全：图库、完整描述、源代码、平台、标签和许可证。`)
};

const ja_basecamp_editor_quality_ok = /** @type {(inputs: Basecamp_Editor_Quality_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不足はありません：ギャラリー、詳しい説明、ソースコード、プラットフォーム、タグ、ライセンス。`)
};

/**
* | output |
* | --- |
* | "Nothing missing: a gallery, a full description, the source, platform, tags and licence." |
*
* @param {Basecamp_Editor_Quality_OkInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_editor_quality_ok = /** @type {((inputs?: Basecamp_Editor_Quality_OkInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Editor_Quality_OkInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_editor_quality_ok(inputs)
	if (locale === "de") return de_basecamp_editor_quality_ok(inputs)
	if (locale === "fr") return fr_basecamp_editor_quality_ok(inputs)
	if (locale === "it") return it_basecamp_editor_quality_ok(inputs)
	if (locale === "nl") return nl_basecamp_editor_quality_ok(inputs)
	if (locale === "pl") return pl_basecamp_editor_quality_ok(inputs)
	if (locale === "pt") return pt_basecamp_editor_quality_ok(inputs)
	if (locale === "ru") return ru_basecamp_editor_quality_ok(inputs)
	if (locale === "sv") return sv_basecamp_editor_quality_ok(inputs)
	if (locale === "tr") return tr_basecamp_editor_quality_ok(inputs)
	if (locale === "zh") return zh_basecamp_editor_quality_ok(inputs)
	if (locale === "ja") return ja_basecamp_editor_quality_ok(inputs)
	return en_basecamp_editor_quality_ok(inputs)
});
