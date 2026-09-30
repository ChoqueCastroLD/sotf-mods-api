/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Banner_Archived_TextInputs */

const en_builds_banner_archived_text = /** @type {(inputs: Builds_Banner_Archived_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The builder no longer updates this build. It may not place correctly with recent BuildShare versions.`)
};

const es_builds_banner_archived_text = /** @type {(inputs: Builds_Banner_Archived_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El constructor ya no actualiza esta build. Puede que no se coloque bien con versiones recientes de BuildShare.`)
};

const de_builds_banner_archived_text = /** @type {(inputs: Builds_Banner_Archived_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der Erbauer aktualisiert diesen Build nicht mehr. Mit neueren BuildShare-Versionen lässt er sich eventuell nicht richtig platzieren.`)
};

const fr_builds_banner_archived_text = /** @type {(inputs: Builds_Banner_Archived_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le bâtisseur ne met plus cette build à jour. Elle risque de mal se placer avec les versions récentes de BuildShare.`)
};

const it_builds_banner_archived_text = /** @type {(inputs: Builds_Banner_Archived_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il costruttore non aggiorna più questa build. Potrebbe non piazzarsi bene con le versioni recenti di BuildShare.`)
};

const nl_builds_banner_archived_text = /** @type {(inputs: Builds_Banner_Archived_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De bouwer werkt deze build niet meer bij. Met recente BuildShare-versies wordt hij misschien niet goed geplaatst.`)
};

const pl_builds_banner_archived_text = /** @type {(inputs: Builds_Banner_Archived_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Budowniczy nie aktualizuje już tego buildu. Z nowszymi wersjami BuildShare może nie stawiać się poprawnie.`)
};

const pt_builds_banner_archived_text = /** @type {(inputs: Builds_Banner_Archived_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O construtor não atualiza mais esta build. Ela pode não ser posicionada direito com versões recentes do BuildShare.`)
};

const ru_builds_banner_archived_text = /** @type {(inputs: Builds_Banner_Archived_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Строитель больше не обновляет эту постройку. С новыми версиями BuildShare она может ставиться неправильно.`)
};

const sv_builds_banner_archived_text = /** @type {(inputs: Builds_Banner_Archived_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Byggaren uppdaterar inte längre bygget. Det kanske inte placeras rätt med nyare BuildShare-versioner.`)
};

const tr_builds_banner_archived_text = /** @type {(inputs: Builds_Banner_Archived_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapımcı bu yapıyı artık güncellemiyor. Yeni BuildShare sürümleriyle düzgün yerleşmeyebilir.`)
};

const zh_builds_banner_archived_text = /** @type {(inputs: Builds_Banner_Archived_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`建造者已不再更新此建筑。使用较新的 BuildShare 版本时可能无法正确放置。`)
};

const ja_builds_banner_archived_text = /** @type {(inputs: Builds_Banner_Archived_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`建築者はこの建築を更新していません。新しい BuildShare では正しく配置できない場合があります。`)
};

/**
* | output |
* | --- |
* | "The builder no longer updates this build. It may not place correctly with recent BuildShare versions." |
*
* @param {Builds_Banner_Archived_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_banner_archived_text = /** @type {((inputs?: Builds_Banner_Archived_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Banner_Archived_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_banner_archived_text(inputs)
	if (locale === "de") return de_builds_banner_archived_text(inputs)
	if (locale === "fr") return fr_builds_banner_archived_text(inputs)
	if (locale === "it") return it_builds_banner_archived_text(inputs)
	if (locale === "nl") return nl_builds_banner_archived_text(inputs)
	if (locale === "pl") return pl_builds_banner_archived_text(inputs)
	if (locale === "pt") return pt_builds_banner_archived_text(inputs)
	if (locale === "ru") return ru_builds_banner_archived_text(inputs)
	if (locale === "sv") return sv_builds_banner_archived_text(inputs)
	if (locale === "tr") return tr_builds_banner_archived_text(inputs)
	if (locale === "zh") return zh_builds_banner_archived_text(inputs)
	if (locale === "ja") return ja_builds_banner_archived_text(inputs)
	return en_builds_banner_archived_text(inputs)
});
