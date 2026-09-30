/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_Diff_UnavailableInputs */

const en_mod_knowledge_diff_unavailable = /** @type {(inputs: Mod_Knowledge_Diff_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The file list of one of these versions is not available, so only the size, manifest and changelog are compared.`)
};

const es_mod_knowledge_diff_unavailable = /** @type {(inputs: Mod_Knowledge_Diff_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La lista de archivos de una de estas versiones no está disponible, así que solo se comparan el tamaño, el manifiesto y el registro de cambios.`)
};

const de_mod_knowledge_diff_unavailable = /** @type {(inputs: Mod_Knowledge_Diff_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Dateiliste einer dieser Versionen ist nicht verfügbar, daher werden nur Größe, Manifest und Changelog verglichen.`)
};

const fr_mod_knowledge_diff_unavailable = /** @type {(inputs: Mod_Knowledge_Diff_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La liste des fichiers de l’une de ces versions n’est pas disponible : seuls la taille, le manifeste et le journal des modifications sont comparés.`)
};

const it_mod_knowledge_diff_unavailable = /** @type {(inputs: Mod_Knowledge_Diff_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’elenco dei file di una di queste versioni non è disponibile, quindi si confrontano solo dimensione, manifest e changelog.`)
};

const nl_mod_knowledge_diff_unavailable = /** @type {(inputs: Mod_Knowledge_Diff_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De bestandslijst van een van deze versies is niet beschikbaar, dus alleen grootte, manifest en changelog worden vergeleken.`)
};

const pl_mod_knowledge_diff_unavailable = /** @type {(inputs: Mod_Knowledge_Diff_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lista plików jednej z tych wersji jest niedostępna, więc porównujemy tylko rozmiar, manifest i listę zmian.`)
};

const pt_mod_knowledge_diff_unavailable = /** @type {(inputs: Mod_Knowledge_Diff_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A lista de arquivos de uma destas versões não está disponível, então só tamanho, manifesto e registro de alterações são comparados.`)
};

const ru_mod_knowledge_diff_unavailable = /** @type {(inputs: Mod_Knowledge_Diff_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Список файлов одной из этих версий недоступен, поэтому сравниваются только размер, манифест и список изменений.`)
};

const sv_mod_knowledge_diff_unavailable = /** @type {(inputs: Mod_Knowledge_Diff_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fillistan för en av versionerna är inte tillgänglig, så bara storlek, manifest och ändringslogg jämförs.`)
};

const tr_mod_knowledge_diff_unavailable = /** @type {(inputs: Mod_Knowledge_Diff_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu sürümlerden birinin dosya listesi mevcut değil; yalnızca boyut, manifest ve değişiklik günlüğü karşılaştırılır.`)
};

const zh_mod_knowledge_diff_unavailable = /** @type {(inputs: Mod_Knowledge_Diff_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`其中一个版本的文件列表不可用，因此仅比较大小、清单和更新日志。`)
};

const ja_mod_knowledge_diff_unavailable = /** @type {(inputs: Mod_Knowledge_Diff_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`いずれかのバージョンのファイル一覧が利用できないため、サイズ、マニフェスト、変更履歴のみ比較します。`)
};

/**
* | output |
* | --- |
* | "The file list of one of these versions is not available, so only the size, manifest and changelog are compared." |
*
* @param {Mod_Knowledge_Diff_UnavailableInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_diff_unavailable = /** @type {((inputs?: Mod_Knowledge_Diff_UnavailableInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Diff_UnavailableInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_diff_unavailable(inputs)
	if (locale === "de") return de_mod_knowledge_diff_unavailable(inputs)
	if (locale === "fr") return fr_mod_knowledge_diff_unavailable(inputs)
	if (locale === "it") return it_mod_knowledge_diff_unavailable(inputs)
	if (locale === "nl") return nl_mod_knowledge_diff_unavailable(inputs)
	if (locale === "pl") return pl_mod_knowledge_diff_unavailable(inputs)
	if (locale === "pt") return pt_mod_knowledge_diff_unavailable(inputs)
	if (locale === "ru") return ru_mod_knowledge_diff_unavailable(inputs)
	if (locale === "sv") return sv_mod_knowledge_diff_unavailable(inputs)
	if (locale === "tr") return tr_mod_knowledge_diff_unavailable(inputs)
	if (locale === "zh") return zh_mod_knowledge_diff_unavailable(inputs)
	if (locale === "ja") return ja_mod_knowledge_diff_unavailable(inputs)
	return en_mod_knowledge_diff_unavailable(inputs)
});
