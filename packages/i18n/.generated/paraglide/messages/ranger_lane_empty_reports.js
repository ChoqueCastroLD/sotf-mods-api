/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Lane_Empty_ReportsInputs */

const en_ranger_lane_empty_reports = /** @type {(inputs: Ranger_Lane_Empty_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No open reports. The community is behaving.`)
};

const es_ranger_lane_empty_reports = /** @type {(inputs: Ranger_Lane_Empty_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No hay reportes abiertos. La comunidad se porta bien.`)
};

const de_ranger_lane_empty_reports = /** @type {(inputs: Ranger_Lane_Empty_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine offenen Meldungen. Die Community benimmt sich.`)
};

const fr_ranger_lane_empty_reports = /** @type {(inputs: Ranger_Lane_Empty_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun signalement ouvert. La communauté se tient bien.`)
};

const it_ranger_lane_empty_reports = /** @type {(inputs: Ranger_Lane_Empty_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessuna segnalazione aperta. La community si comporta bene.`)
};

const nl_ranger_lane_empty_reports = /** @type {(inputs: Ranger_Lane_Empty_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen open meldingen. De community gedraagt zich.`)
};

const pl_ranger_lane_empty_reports = /** @type {(inputs: Ranger_Lane_Empty_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak otwartych zgłoszeń. Społeczność się sprawuje.`)
};

const pt_ranger_lane_empty_reports = /** @type {(inputs: Ranger_Lane_Empty_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhuma denúncia aberta. A comunidade está se comportando.`)
};

const ru_ranger_lane_empty_reports = /** @type {(inputs: Ranger_Lane_Empty_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Открытых жалоб нет. Сообщество ведёт себя хорошо.`)
};

const sv_ranger_lane_empty_reports = /** @type {(inputs: Ranger_Lane_Empty_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga öppna anmälningar. Communityn sköter sig.`)
};

const tr_ranger_lane_empty_reports = /** @type {(inputs: Ranger_Lane_Empty_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Açık şikâyet yok. Topluluk uslu duruyor.`)
};

const zh_ranger_lane_empty_reports = /** @type {(inputs: Ranger_Lane_Empty_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有未处理的举报。社区很守规矩。`)
};

const ja_ranger_lane_empty_reports = /** @type {(inputs: Ranger_Lane_Empty_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未対応の報告はありません。コミュニティは平穏です。`)
};

/**
* | output |
* | --- |
* | "No open reports. The community is behaving." |
*
* @param {Ranger_Lane_Empty_ReportsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_lane_empty_reports = /** @type {((inputs?: Ranger_Lane_Empty_ReportsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Lane_Empty_ReportsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_lane_empty_reports(inputs)
	if (locale === "de") return de_ranger_lane_empty_reports(inputs)
	if (locale === "fr") return fr_ranger_lane_empty_reports(inputs)
	if (locale === "it") return it_ranger_lane_empty_reports(inputs)
	if (locale === "nl") return nl_ranger_lane_empty_reports(inputs)
	if (locale === "pl") return pl_ranger_lane_empty_reports(inputs)
	if (locale === "pt") return pt_ranger_lane_empty_reports(inputs)
	if (locale === "ru") return ru_ranger_lane_empty_reports(inputs)
	if (locale === "sv") return sv_ranger_lane_empty_reports(inputs)
	if (locale === "tr") return tr_ranger_lane_empty_reports(inputs)
	if (locale === "zh") return zh_ranger_lane_empty_reports(inputs)
	if (locale === "ja") return ja_ranger_lane_empty_reports(inputs)
	return en_ranger_lane_empty_reports(inputs)
});
